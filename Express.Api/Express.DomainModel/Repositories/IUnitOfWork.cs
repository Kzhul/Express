using Express.Shared.Results;
using System;
using System.Data;
using System.Threading;
using System.Threading.Tasks;

namespace Express.DomainModel.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IResult BeginTransaction(IsolationLevel isolationLevel = IsolationLevel.ReadCommitted);
        Task<IResult> BeginTransactionAsync(IsolationLevel isolationLevel = IsolationLevel.ReadCommitted, CancellationToken cancellationToken = default);
        IResult CommitTransaction();
        Task<IResult> CommitTransactionAsync(CancellationToken cancellationToken = default);
        IResult RollbackTransaction();
        Task<IResult> RollbackTransactionAsync(CancellationToken cancellationToken = default);
        IResult SaveChange();
        Task<IResult> SaveChangeAsync(CancellationToken cancellationToken = default);
    }
}
