using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [ApiController, AllowAnonymous]
    [Route("api/[controller]")]
    public class ActivitiesController : BaseApiController
    {

        private readonly ILogger<ActivitiesController> _logger;

        public ActivitiesController(ILogger<ActivitiesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetActivities()
        {
            var activities = await Mediator.Send(new List.Query());
            return HandleResult(activities);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(Guid id)
        {
            var result = await Mediator.Send(new Details.Query { Id = id });
            return HandleResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity model)
        {
            var activity = await Mediator.Send(new Create.Command { Activity = model });
            return HandleResult(activity);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateActivity(Guid id, Activity model)
        {
            model.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = model }));
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
