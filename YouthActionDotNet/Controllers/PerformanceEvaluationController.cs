using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using YouthActionDotNet.Control;
using YouthActionDotNet.DAL;
using YouthActionDotNet.Data;
using YouthActionDotNet.Models;

namespace YouthActionDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PerformanceEvaluationController : ControllerBase, IUserInterfaceCRUD<PerformanceEvaluation>
    {

        private PerformanceEvaluationControl performanceevaluationControl;

        public PerformanceEvaluationController(DBContext context)
        {
            performanceevaluationControl = new PerformanceEvaluationControl(context);
        }

        [HttpGet("All")]
        public async Task<ActionResult<string>> All()
        {
            return await performanceevaluationControl.All();
        }

        [HttpPost("Create")]
        public async Task<ActionResult<string>> Create(PerformanceEvaluation template)
        {
            return await performanceevaluationControl.Create(template);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> Delete(string id)
        {
            return await performanceevaluationControl.Delete(id);
        }

        [HttpDelete("Delete")]
        public async Task<ActionResult<string>> Delete(PerformanceEvaluation template)
        {
            return await performanceevaluationControl.Delete(template);
        }

        public bool Exists(string id)
        {
            return performanceevaluationControl.Exists(id);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<string>> Get(string id)
        {
            return await performanceevaluationControl.Get(id);
        }

        [HttpGet("Settings")]
        public string Settings()
        {
            return performanceevaluationControl.Settings();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<string>> Update(string id, PerformanceEvaluation template)
        {
            return await performanceevaluationControl.Update(id, template);
        }

        [HttpPut("UpdateAndFetch/{id}")]
        public async Task<ActionResult<string>> UpdateAndFetchAll(string id, PerformanceEvaluation template)
        {
            return await performanceevaluationControl.UpdateAndFetchAll(id, template);
        }

        // [HttpGet("Search")]
        // public async Task<ActionResult<string>> Search(string Query)
        // {
        //     return await feedbackControl.Search(Query);
        // }

        // [HttpGet("Filter")]
        // public async Task<ActionResult<string>> Filter([FromQuery] List<string> filterQuery)
        // {
        //     return await feedbackControl.Filter(filterQuery);
        // }

    }

}