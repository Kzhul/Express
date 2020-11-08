using Express.Shared.Results;
using System.Threading.Tasks;

namespace Express.DomainModel.Commands
{
    public interface ICommandHandler<TCommand>
        where TCommand : ICommand
    {
        Task<IResult> HandleAsync(TCommand command);
    }
}
