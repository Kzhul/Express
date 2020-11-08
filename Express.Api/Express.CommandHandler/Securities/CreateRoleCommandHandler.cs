using Express.DomainModel.Commands.Securities;
using Express.DomainModel.DomainServices.Securities;
using Express.DomainModel.Models.AggregateModels;
using Express.DomainModel.Models.Securities;
using Express.Shared.Results;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Express.CommandHandler.Securities
{
    public class CreateRoleCommandHandler : CommandHandler<CreateRoleCommand>
    {
        private readonly ILogger<CreateRoleCommandHandler> _logger;
        private readonly IRoleDomainService _roleDomainService;

        public CreateRoleCommandHandler(CommandHandlerAggregateArgument aggregateArgument,
            ILogger<CreateRoleCommandHandler> logger,
            IRoleDomainService roleDomainService)
            : base(aggregateArgument)
        {
            _logger = logger;
            _roleDomainService = roleDomainService;
        }

        public override async Task<IResult> HandleAsync(CreateRoleCommand command)
        {
            var aggregateRole = AggregateArgument.Mapper.Map<AggregateRole>(command);
            _roleDomainService.CreateRole(aggregateRole);
            await AggregateArgument.UnitOfWork.SaveChangeAsync().ConfigureAwait(false);
            return Result.Ok();
        }
    }
}
