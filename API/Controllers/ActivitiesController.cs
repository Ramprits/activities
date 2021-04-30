using System;
using MediatR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Application.Activities;
using Domain;
namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActivitiesController : BaseApiController
    {

        private readonly ILogger<ActivitiesController> _logger;
        private readonly IMediator _mediator;

        public ActivitiesController(ILogger<ActivitiesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            var activities = await Mediator.Send(new List.Query());
            return Ok(activities);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            var activity = await Mediator.Send(new Details.Query { Id = id });
            return Ok(activity);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity model)
        {
            var activity = await Mediator.Send(new Create.Command { Activity = model });
            return Created("", null);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateActivity(Guid id, Activity model)
        {
            model.Id = id;
            await Mediator.Send(new Edit.Command { Activity = model });
            return Ok();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            await Mediator.Send(new Delete.Command { Id = id });
            return Ok();
        }
    }
}
