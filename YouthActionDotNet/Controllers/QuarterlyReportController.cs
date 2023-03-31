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

    public class QuarterlyReportController : ControllerBase, IUserInterfaceCRUD<QuarterlyReport>
    {
        private QuarterlyReportControl quarterlyReportControl;

        public QuarterlyReportController(DBContext context)
        {
            quarterlyReportControl = new QuarterlyReportControl(context);
        }

        [HttpGet("All")]
        public async Task<ActionResult<string>> All()
        {
            return await quarterlyReportControl.All();
        }

        [HttpPost("Create")]
        public async Task<ActionResult<string>> Create(QuarterlyReport template)
        {
            return await quarterlyReportControl.Create(template);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> Delete(string id)
        {
            return await quarterlyReportControl.Delete(id);
        }

        [HttpDelete("Delete")]
        public async Task<ActionResult<string>> Delete(QuarterlyReport template)
        {
            return await quarterlyReportControl.Delete(template);
        }

        public bool Exists(string id)
        {
            return quarterlyReportControl.Exists(id);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<string>> Get(string id)
        {
            return await quarterlyReportControl.Get(id);
        }

        [HttpGet("Settings")]
        public string Settings()
        {
            return quarterlyReportControl.Settings();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<string>> Update(string id, QuarterlyReport template)
        {
            return await quarterlyReportControl.Update(id, template);
        }

        [HttpPut("UpdateAndFetch/{id}")]
        public async Task<ActionResult<string>> UpdateAndFetchAll(string id, QuarterlyReport template)
        {
            return await quarterlyReportControl.UpdateAndFetchAll(id, template);
        }

        [HttpGet("Report")]
        public async Task<ActionResult<string>> getQuarterlyReport(string Query)
        {
            return await quarterlyReportControl.getQuarterlyReport(Query);
        }

        [HttpGet("Generate")]
        public async Task<ActionResult<string>> Generate([FromQuery] List<string> filterQuery)
        {
            return await quarterlyReportControl.generatePDF(filterQuery);
        }

    }
}