using Express.DomainModel.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Express.Api.Controllers
{
    [ApiController]
    [Route("api/v1/helpers")]
    public class HelpersController : ControllerBase
    {
        public HelpersController()
        {
        }
    }
}
