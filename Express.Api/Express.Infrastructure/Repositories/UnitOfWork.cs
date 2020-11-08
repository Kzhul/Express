using Express.DomainModel.Repositories;
using Express.Infrastructure;
using Express.Shared.Results;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;
using System;
using System.Data;
using System.Threading;
using System.Threading.Tasks;

namespace T2P.CON.MasterDataService.Infrastructures.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ILogger<UnitOfWork> _logger;
        private readonly DataContext _context;
        private IDbContextTransaction _transaction;

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_transaction != null) _transaction.Dispose();
                if (_context != null) _context.Dispose();
            }
        }

        public UnitOfWork(ILogger<UnitOfWork> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IResult BeginTransaction(IsolationLevel isolationLevel = IsolationLevel.ReadCommitted)
        {
            _transaction = _context.Database.BeginTransaction(isolationLevel);
            return Result.Ok();
        }

        public async Task<IResult> BeginTransactionAsync(IsolationLevel isolationLevel = IsolationLevel.ReadCommitted, CancellationToken cancellationToken = default)
        {
            _transaction = await _context.Database.BeginTransactionAsync(isolationLevel, cancellationToken).ConfigureAwait(false);
            return Result.Ok();
        }

        public IResult CommitTransaction()
        {
            if (_transaction != null) _transaction.Commit();
            return Result.Ok();
        }

        public async Task<IResult> CommitTransactionAsync(CancellationToken cancellationToken = default)
        {
            if (_transaction != null) await _transaction.CommitAsync(cancellationToken).ConfigureAwait(false);
            return Result.Ok();
        }

        public IResult RollbackTransaction()
        {
            if (_transaction != null) _transaction.Rollback();
            return Result.Ok();
        }

        public async Task<IResult> RollbackTransactionAsync(CancellationToken cancellationToken = default)
        {
            if (_transaction != null) await _transaction.RollbackAsync(cancellationToken).ConfigureAwait(false);
            return Result.Ok();
        }

        public IResult SaveChange()
        {
            try
            {
                _context.SaveChanges();
                return Result.Ok();
            }
            catch (Exception ex) when (ex is DbUpdateException || ex is DbUpdateConcurrencyException)
            {
                _logger.LogError($"Could not save data due to: '{ex.Message}'", LogLevel.Error);
                _logger.LogError(ex, ex.Message);
                return Result.Fail(ex);
            }
        }

        public async Task<IResult> SaveChangeAsync(CancellationToken cancellationToken = default)
        {
            try
            {
                await _context.SaveChangesAsync(cancellationToken).ConfigureAwait(false);
                return Result.Ok();
            }
            catch (Exception ex) when (ex is DbUpdateException || ex is DbUpdateConcurrencyException)
            {
                _logger.LogError($"Could not save data due to: '{ex.Message}'", LogLevel.Error);
                _logger.LogError(ex, ex.Message);
                return Result.Fail(ex);
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
