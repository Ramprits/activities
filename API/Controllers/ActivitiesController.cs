using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActivitiesController : ControllerBase
    {

        private readonly ILogger<ActivitiesController> _logger;
        private readonly DataContext _context;

        public ActivitiesController(ILogger<ActivitiesController> logger, DataContext context)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            var activities = await _context.Activities.ToListAsync();
            return Ok(activities);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            var activity = await _context.Activities.FindAsync(id);
            return Ok(activity);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Activity model)
        {
            //TODO: Implement Realistic Implementation
            await Task.Yield();
            _logger.LogInformation(model.Title);
            return Created("", null);
        }

    }
}
