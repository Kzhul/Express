using Dapper;
using Express.DomainModel.Models;
using Express.DomainModel.Repositories;
using Express.Shared.Results;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Express.Infrastructure.Repositories
{
    public class Repository : IRepository
    {
        protected const int CommandTimeout = 180;

        protected RepositoryAggregateArgument AggregateArgument { get; }

        private void OpenConnection()
        {
            if (AggregateArgument.DbConnection.State == ConnectionState.Closed || AggregateArgument.DbConnection.State == ConnectionState.Broken)
                AggregateArgument.DbConnection.Open();
        }

        private void CloseConnection()
        {
            if (AggregateArgument.DbConnection.State != ConnectionState.Closed && AggregateArgument.DbConnection.State != ConnectionState.Broken)
                AggregateArgument.DbConnection.Close();
        }

        private void SetParameters(Dictionary<string, object> parameters, DynamicParameters args, ParameterDirection parameterDirection)
        {
            if (parameters == null) return;
            foreach (var item in parameters)
            {
                args.Add(item.Key, item.Value, direction: parameterDirection);
            }
        }

        private void GetParameters(Dictionary<string, object> parameters, DynamicParameters args)
        {
            if (parameters == null) return;
            foreach (var item in parameters)
            {
                parameters[item.Key] = args.Get<object>(item.Key);
            }
        }

        protected Repository(RepositoryAggregateArgument aggregateArgument)
        {
            AggregateArgument = aggregateArgument;
        }

        protected async Task<TDto> GetSingleAsync<TDto>(string query, Dictionary<string, object> inputParameters = null, Dictionary<string, object> outputParameters = null, int commandTimeout = CommandTimeout, CommandType commandType = CommandType.StoredProcedure)
        {
            try
            {

                OpenConnection();

                var args = new DynamicParameters();
                SetParameters(inputParameters, args, ParameterDirection.Input);
                SetParameters(outputParameters, args, ParameterDirection.InputOutput);
                var listDtos = await AggregateArgument.DbConnection.QueryAsync<TDto>(query, args, null, commandTimeout, commandType).ConfigureAwait(false);
                GetParameters(outputParameters, args);
                return listDtos.FirstOrDefault();
            }
            finally
            {
                CloseConnection();
            }
        }

        protected async Task<IEnumerable<TDto>> GetListAsync<TDto>(string query, Dictionary<string, object> inputParameters = null, Dictionary<string, object> outputParameters = null, int commandTimeout = CommandTimeout, CommandType commandType = CommandType.StoredProcedure)
        {
            try
            {
                OpenConnection();

                var args = new DynamicParameters();
                SetParameters(inputParameters, args, ParameterDirection.Input);
                SetParameters(outputParameters, args, ParameterDirection.InputOutput);
                var listDtos = await AggregateArgument.DbConnection.QueryAsync<TDto>(query, args, null, commandTimeout, commandType).ConfigureAwait(false);
                GetParameters(outputParameters, args);
                return listDtos;
            }
            finally
            {
                CloseConnection();
            }
        }
    }

    public class Repository<TEntity> : Repository, IRepository<TEntity>
        where TEntity : BaseModel
    {
        protected async Task<TDto> GetSingleAsync<TDto>(Expression<Func<TEntity, bool>> predicate)
        {
            var entity = await AggregateArgument.Context.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(predicate).ConfigureAwait(false);
            return AggregateArgument.Mapper.Map<TDto>(entity);
        }

        protected async Task<IEnumerable<TDto>> GetListAsync<TDto>()
        {
            var listEntities = await AggregateArgument.Context.Set<TEntity>().AsNoTracking().ToListAsync().ConfigureAwait(false);
            return AggregateArgument.Mapper.Map<IEnumerable<TDto>>(listEntities);
        }

        protected async Task<IEnumerable<TDto>> GetListAsync<TDto>(Expression<Func<TEntity, bool>> predicate)
        {
            var listEntities = await AggregateArgument.Context.Set<TEntity>().AsNoTracking().Where(predicate).ToListAsync().ConfigureAwait(false);
            return AggregateArgument.Mapper.Map<IEnumerable<TDto>>(listEntities);
        }

        protected async Task<IEnumerable<TDto>> GetListAsync<TDto>(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TDto>> entitySelector)
        {
            var listEntities = await AggregateArgument.Context.Set<TEntity>().AsNoTracking().Where(predicate).Select(entitySelector).ToListAsync().ConfigureAwait(false);
            return listEntities;
        }

        public Repository(RepositoryAggregateArgument aggregateArgument) : base(aggregateArgument)
        {
        }

        public void Insert(TEntity entity)
        {
            AggregateArgument.Context.Set<TEntity>().Add(entity);
        }

        public void InsertRange(IEnumerable<TEntity> listEntities)
        {
            AggregateArgument.Context.Set<TEntity>().AddRange(listEntities);
        }

        public void Update(TEntity entity, params Expression<Func<TEntity, object>>[] updatedProperties)
        {
            AggregateArgument.Context.Set<TEntity>().Attach(entity);
            var dbEntityEntry = AggregateArgument.Context.Entry(entity);

            if (updatedProperties != null && updatedProperties.Any())
            {
                foreach (var property in updatedProperties)
                {
                    dbEntityEntry.Property(property).IsModified = true;
                }
            }
            else
            {
                dbEntityEntry.State = EntityState.Modified;
                if (entity is AuditModel)
                {
                    AuditModel auditModel;
                    dbEntityEntry.Property(nameof(auditModel.CreatedBy)).IsModified = false;
                    dbEntityEntry.Property(nameof(auditModel.CreatedOn)).IsModified = false;
                }
            }
        }

        public void UpdateRange(IEnumerable<TEntity> listEntities, params Expression<Func<TEntity, object>>[] updatedProperties)
        {
            AggregateArgument.Context.Set<TEntity>().AddRange(listEntities);

            foreach (var entity in listEntities)
            {
                var dbEntityEntry = AggregateArgument.Context.Entry(entity);
                if (updatedProperties != null && updatedProperties.Any())
                {
                    foreach (var property in updatedProperties)
                    {
                        dbEntityEntry.Property(property).IsModified = true;
                    }
                }
                else
                {
                    dbEntityEntry.State = EntityState.Modified;
                    if (entity is AuditModel)
                    {
                        AuditModel auditModel;
                        dbEntityEntry.Property(nameof(auditModel.CreatedBy)).IsModified = false;
                        dbEntityEntry.Property(nameof(auditModel.CreatedOn)).IsModified = false;
                    }
                }
            }
        }

        public void Delete(Expression<Func<TEntity, bool>> predicate)
        {
            var dbSetEntity = AggregateArgument.Context.Set<TEntity>();
            var list = dbSetEntity.Where(predicate);
            dbSetEntity.RemoveRange(list);
        }
    }
}