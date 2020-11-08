using Express.DomainModel.Commands;
using Express.Shared.Results;
using System;
using System.Threading.Tasks;

namespace Express.CommandHandler
{
    public abstract class CommandHandler<TCommand> : ICommandHandler<TCommand>
        where TCommand : ICommand
    {
        protected CommandHandlerAggregateArgument AggregateArgument { get; }

        protected virtual void ValidateCommand(TCommand command)
        {
            if (command == null) throw new ArgumentNullException(nameof(command));
        }

        protected CommandHandler(CommandHandlerAggregateArgument aggregateArgument)
        {
            AggregateArgument = aggregateArgument;
        }

        public abstract Task<IResult> HandleAsync(TCommand command);
    }
}
