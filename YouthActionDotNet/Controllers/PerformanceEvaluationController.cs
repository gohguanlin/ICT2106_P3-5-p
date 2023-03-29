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

        private PerformanceEvaluationControl performanceEvaluationControl;

        public PerformanceEvaluationController(DBContext context)
        {
            performanceEvaluationControl = new PerformanceEvaluationControl(context);
        }

        [HttpGet("All")]
        public async Task<ActionResult<string>> All()
        {
            return await performanceEvaluationControl.All();
        }

        [HttpPost("Create")]
        public async Task<ActionResult<string>> Create(PerformanceEvaluation template)
        {
            return await performanceEvaluationControl.Create(template);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> Delete(string id)
        {
            return await performanceEvaluationControl.Delete(id);
        }

        [HttpDelete("Delete")]
        public async Task<ActionResult<string>> Delete(PerformanceEvaluation template)
        {
            return await performanceEvaluationControl.Delete(template);
        }

        public bool Exists(string id)
        {
            return performanceEvaluationControl.Exists(id);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<string>> Get(string id)
        {
            return await performanceEvaluationControl.Get(id);
        }

        [HttpGet("Settings")]
        public string Settings()
        {
            return performanceEvaluationControl.Settings();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<string>> Update(string id, PerformanceEvaluation template)
        {
            return await performanceEvaluationControl.Update(id, template);
        }

        [HttpPut("UpdateAndFetch/{id}")]
        public async Task<ActionResult<string>> UpdateAndFetchAll(string id, PerformanceEvaluation template)
        {
            return await performanceEvaluationControl.UpdateAndFetchAll(id, template);
        }

    }

}