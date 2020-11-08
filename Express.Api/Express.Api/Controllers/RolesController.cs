using Express.Api.Requests.Securities;
using Express.DomainModel.Commands.Securities;
using Express.DomainModel.Handlers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Express.Api.Controllers
{
    [ApiController]
    [Route("api/v1/roles")]
    public class RolesController : BaseController
    {
        private readonly CommandBus _commandBus;

        public RolesController(CommandBus commandBus)
        {
            _commandBus = commandBus;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRoleAsync(RoleCreatingRequest request)
        {
            var command = new CreateRoleCommand(request.Name, request.Description, request.PermissionIds);
            var result = await _commandBus.PublishAsync(command).ConfigureAwait(false);
            return GenerateActionResult(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRoleAsync(Guid id, RoleCreatingRequest request)
        {
            var command = new UpdateRoleCommand(id, request.Name, request.Description, request.PermissionIds);
            var result = await _commandBus.PublishAsync(command).ConfigureAwait(false);
            return GenerateActionResult(result);
        }
    }
}
