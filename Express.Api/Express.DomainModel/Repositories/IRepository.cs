using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Express.DomainModel.Repositories
{
    public interface IRepository
    {
    }

    public interface IRepository<TEntity>
        where TEntity : class
    {
        void Insert(TEntity entity);
        void InsertRange(IEnumerable<TEntity> listEntities);
        void Update(TEntity entity, params Expression<Func<TEntity, object>>[] updatedProperties);
        void Delete(Expression<Func<TEntity, bool>> predicate);
    }
}
