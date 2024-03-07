using Microsoft.AspNetCore.Mvc;

namespace AspNetId.Controllers
{
    [ApiController]
    [Route("/api")]
    public class IndexController : ControllerBase
    {
        public IndexController()
        {
        }

        [HttpGet]
        public IResult Get()
        {
            return Results.Text("Hello World!");
        }
    }
}
