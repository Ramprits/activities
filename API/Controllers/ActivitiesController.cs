using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActivitiesController : ControllerBase
    {

        private readonly ILogger<ActivitiesController> _logger;

        public ActivitiesController(ILogger<ActivitiesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetActivities()
        {
            return Ok();
        }


    }
}
