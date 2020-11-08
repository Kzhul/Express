using Express.Shared.Results;
using Microsoft.AspNetCore.Mvc;

namespace Express.Api.Controllers
{
    [ApiController]
    public abstract class BaseController : ControllerBase
    {
        public BaseController()
        {
        }

        public IActionResult GenerateActionResult(IResult result)
        {
            if (result.IsSuccess) return Ok();
            else return BadRequest(result.Message);
        }
    }
}
