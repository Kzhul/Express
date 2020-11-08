using Express.DomainModel.Commands.Securities;
using Express.DomainModel.DomainServices.Securities;
using Express.DomainModel.Models.AggregateModels;
using Express.Shared.Results;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Express.CommandHandler.Securities
{
    public class UpdateRoleCommandHandler : CommandHandler<UpdateRoleCommand>
    {
        private readonly ILogger<CreateRoleCommandHandler> _logger;
        private readonly IRoleDomainService _roleDomainService;

        public UpdateRoleCommandHandler(CommandHandlerAggregateArgument aggregateArgument,
            ILogger<CreateRoleCommandHandler> logger,
            IRoleDomainService roleDomainService)
            : base(aggregateArgument)
        {
            _logger = logger;
            _roleDomainService = roleDomainService;
        }

        public override async Task<IResult> HandleAsync(UpdateRoleCommand command)
        {
            var aggregateRole = AggregateArgument.Mapper.Map<AggregateRole>(command);
            _roleDomainService.UpdateRole(aggregateRole);
            var result = await AggregateArgument.UnitOfWork.SaveChangeAsync().ConfigureAwait(false);
            if (result.IsSuccess)
                return Result.Ok();
            else
            {
                _logger.LogError(result.Exception, "Failed to update role");
                throw result.Exception;
            }
        }
    }
}
