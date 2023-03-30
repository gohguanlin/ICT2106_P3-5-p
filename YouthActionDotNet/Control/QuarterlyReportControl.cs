using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YouthActionDotNet.Data;
using YouthActionDotNet.Models;
using Newtonsoft.Json;
using System.Security.Cryptography;
using YouthActionDotNet.DAL;
using YouthActionDotNet.Controllers;

namespace YouthActionDotNet.Control
{
    public class QuarterlyReportControl : IUserInterfaceCRUD<QuarterlyReport>
    {
        private GenericRepositoryIn<QuarterlyReport> QuarterlyReportRepositoryIn;
        private GenericRepositoryOut<QuarterlyReport> QuarterlyReportRepositoryOut;
        private GenericRepositoryOut<ServiceCenter> ServiceCenterRepositoryOut;

        JsonSerializerSettings settings = new JsonSerializerSettings
        {
            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        };

        public QuarterlyReportControl(DBContext context)
        {
            QuarterlyReportRepositoryIn = new GenericRepositoryIn<QuarterlyReport>(context);
            QuarterlyReportRepositoryOut = new GenericRepositoryOut<QuarterlyReport>(context);
            ServiceCenterRepositoryOut = new GenericRepositoryOut<ServiceCenter>(context);
        }
        public bool Exists(string id)
        {
            if (QuarterlyReportRepositoryOut.GetByIDAsync(id) != null)
            {
                return true;
            }
            return false;
        }

        public async Task<ActionResult<string>> All()
        {
            var quarterlyReport = await QuarterlyReportRepositoryOut.GetAllAsync();
            return JsonConvert.SerializeObject(new { success = true, data = quarterlyReport }, settings);

        }

        public async Task<ActionResult<string>> Create(QuarterlyReport template)
        {
            var createdQuarterlyReport = await QuarterlyReportRepositoryIn.InsertAsync(template);
            return JsonConvert.SerializeObject(new { success = true, message = "Quarterly Report Created", data = createdQuarterlyReport }, settings);
        }

        public async Task<ActionResult<string>> Delete(string id)
        {
            var quarterlyReport = await QuarterlyReportRepositoryOut.GetByIDAsync(id);
            if (quarterlyReport == null)
            {
                return JsonConvert.SerializeObject(new { success = false, message = "Quarterly Report Not Found" }, settings);
            }
            await QuarterlyReportRepositoryIn.DeleteAsync(quarterlyReport);
            return JsonConvert.SerializeObject(new { success = true, message = "Quarterly Report Deleted" }, settings);
        }

        public async Task<ActionResult<string>> Delete(QuarterlyReport template)
        {
            var quarterlyReport = await QuarterlyReportRepositoryOut.GetByIDAsync(template.QuarterlyReportId);
            if (quarterlyReport == null)
            {
                return JsonConvert.SerializeObject(new { success = false, message = "Quarterly Report Not Found" }, settings);
            }
            await QuarterlyReportRepositoryIn.DeleteAsync(quarterlyReport);
            return JsonConvert.SerializeObject(new { success = true, message = "Quarterly Report Deleted" }, settings);
        }

        public async Task<ActionResult<string>> Get(string id)
        {
            var quarterlyReport = await QuarterlyReportRepositoryOut.GetByIDAsync(id);
            if (quarterlyReport == null)
            {
                return JsonConvert.SerializeObject(new { success = false, message = "Quarterly Report Not Found" }, settings);
            }
            return JsonConvert.SerializeObject(new { success = true, message = "Quarterly Report Successfully Retrieved", data = quarterlyReport }, settings);
        }

        public async Task<ActionResult<string>> Update(string id, QuarterlyReport template)
        {
            return JsonConvert.SerializeObject(new { success = false, message = "Quarterly Report Update Not Implemented" }, settings);
        }
        public async Task<ActionResult<string>> UpdateAndFetchAll(string id, QuarterlyReport template)
        {
            return JsonConvert.SerializeObject(new { success = false, message = "Quarterly Report Update Not Implemented" }, settings);
        }

        public string Settings()
        {
            Settings settings = new Settings();
            settings.ColumnSettings = new Dictionary<string, ColumnHeader>();
            settings.FieldSettings = new Dictionary<string, InputType>();

            settings.ColumnSettings.Add("QuarterlyReportId", new ColumnHeader { displayHeader = "QuarterlyReport ID" });
            settings.ColumnSettings.Add("QuarterlyReportName", new ColumnHeader { displayHeader = "QuarterlyReport Name" });
            settings.ColumnSettings.Add("QuarterlyReportData", new ColumnHeader { displayHeader = "QuarterlyReport Data" });
            settings.ColumnSettings.Add("QuarterDate", new ColumnHeader { displayHeader = "Quarter Date" });
            settings.ColumnSettings.Add("ServiceCenterId", new ColumnHeader { displayHeader = "Service Center" });

            settings.FieldSettings.Add("QuarterlyReportId", new InputType { type = "text", displayLabel = "QuarterlyReport ID", editable = false, primaryKey = true });
            settings.FieldSettings.Add("QuarterlyReportName", new InputType { type = "text", displayLabel = "QuarterlyReport Name", editable = true, primaryKey = false });
            settings.FieldSettings.Add("QuarterlyReportData", new InputType { type = "text", displayLabel = "QuarterlyReport Data", editable = true, primaryKey = false });
            settings.FieldSettings.Add("QuarterDate", new InputType { type = "date", displayLabel = "Quarter Date", editable = true, primaryKey = false });


            var servicecenters = ServiceCenterRepositoryOut.GetAll();
            settings.FieldSettings.Add("ServiceCenterId", new DropdownInputType
            {
                type = "dropdown",
                displayLabel = "Service Center",
                editable = true,
                primaryKey = false,
                options = servicecenters.Select(x => new DropdownOption { value = x.ServiceCenterId, label = x.ServiceCenterName }).ToList()

            });

            return JsonConvert.SerializeObject(new { success = true, data = settings });
        }

        public void getQuarterlyReport(string reportId)
        {

        }
        public void generatePDF(string reportId)
        {

        }

    }
}