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
    public class PerformanceEvaluationControl : IUserInterfaceCRUD<PerformanceEvaluation>
    {
        private GenericRepositoryIn<PerformanceEvaluation> PerformanceEvaluationRepositoryIn;
        private GenericRepositoryOut<PerformanceEvaluation> PerformanceEvaluationRepositoryOut;
        private GenericRepositoryOut<ServiceCenter> ServiceCenterRepositoryOut;

        JsonSerializerSettings settings = new JsonSerializerSettings
        {
            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        };

        public PerformanceEvaluationControl(DBContext context)
        {
            PerformanceEvaluationRepositoryIn = new GenericRepositoryIn<PerformanceEvaluation>(context);
            PerformanceEvaluationRepositoryOut = new GenericRepositoryOut<PerformanceEvaluation>(context);
            ServiceCenterRepositoryOut = new GenericRepositoryOut<ServiceCenter>(context);
        }
        public bool Exists(string id)
        {
            if (PerformanceEvaluationRepositoryOut.GetByIDAsync(id) != null)
            {
                return true;
            }
            return false;
        }

        public async Task<ActionResult<string>> All()
        {
            var performanceEvaluation = await PerformanceEvaluationRepositoryOut.GetAllAsync();
            return JsonConvert.SerializeObject(new { success = true, data = performanceEvaluation }, settings);

        }

        public async Task<ActionResult<string>> Create(PerformanceEvaluation template)
        {
            var createdPerformanceEvaluation = await PerformanceEvaluationRepositoryIn.InsertAsync(template);
            return JsonConvert.SerializeObject(new { success = true, message = "PerformanceEvaluation Created", data = createdPerformanceEvaluation }, settings);
        }

        public async Task<ActionResult<string>> Delete(string id)
        {
            var performanceEvaluation = await PerformanceEvaluationRepositoryOut.GetByIDAsync(id);
            if (performanceEvaluation == null)
            {
                return JsonConvert.SerializeObject(new { success = false, message = "PerformanceEvaluation Not Found" }, settings);
            }

            await PerformanceEvaluationRepositoryIn.DeleteAsync(performanceEvaluation);
            return JsonConvert.SerializeObject(new { success = true, message = "PerformanceEvaluation Successfully Deleted" }, settings);
        }

        public async Task<ActionResult<string>> Delete(PerformanceEvaluation template)
        {
            var performanceEvaluation = await PerformanceEvaluationRepositoryOut.GetByIDAsync(template.PerformanceEvaluationId);
            if (performanceEvaluation == null)
            {
                return JsonConvert.SerializeObject(new { success = false, message = "PerformanceEvaluation Not Found" }, settings);
            }

            await PerformanceEvaluationRepositoryIn.DeleteAsync(performanceEvaluation);
            return JsonConvert.SerializeObject(new { success = true, message = "PerformanceEvaluation Successfully Deleted" }, settings);
        }

        public async Task<ActionResult<string>> Get(string id)
        {
            var performanceEvaluation = await PerformanceEvaluationRepositoryOut.GetByIDAsync(id);
            if (performanceEvaluation == null)
            {
                return JsonConvert.SerializeObject(new { success = false, message = "PerformanceEvaluation Not Found" }, settings);
            }
            return JsonConvert.SerializeObject(new { success = true, data = performanceEvaluation }, settings);
        }

        

        public async Task<ActionResult<string>> Update(string id, PerformanceEvaluation template)
        {
            if (id != template.PerformanceEvaluationId)
            {
                return JsonConvert.SerializeObject(new { success = false, message = "PerformanceEvaluation ID Mismatch" }, settings);
            }
            await PerformanceEvaluationRepositoryIn.UpdateAsync(template);
            try
            {
                var updatedPerformanceEvaluation = await PerformanceEvaluationRepositoryOut.GetByIDAsync(id);
                return JsonConvert.SerializeObject(new { success = true, data = updatedPerformanceEvaluation }, settings);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Exists(id))
                {
                    return JsonConvert.SerializeObject(new { success = false, message = "PerformanceEvaluation Not Found" }, settings);
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<ActionResult<string>> UpdateAndFetchAll(string id, PerformanceEvaluation template)
        {
            if (id != template.PerformanceEvaluationId)
            {
                return JsonConvert.SerializeObject(new { success = false, message = "PerformanceEvaluation ID Mismatch" }, settings);
            }
            await PerformanceEvaluationRepositoryIn.UpdateAsync(template);
            try
            {
                var updatedPerformanceEvaluation = await PerformanceEvaluationRepositoryOut.GetByIDAsync(id);
                var performanceEvaluation = await PerformanceEvaluationRepositoryOut.GetAllAsync();
                return JsonConvert.SerializeObject(new { success = true, data = performanceEvaluation }, settings);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Exists(id))
                {
                    return JsonConvert.SerializeObject(new { success = false, message = "PerformanceEvaluation Not Found" }, settings);
                }
                else
                {
                    throw;
                }
            }
        }

        public string Settings()
        {
            Settings settings = new Settings();
            settings.ColumnSettings = new Dictionary<string, ColumnHeader>();
            settings.FieldSettings = new Dictionary<string, InputType>();

            settings.ColumnSettings.Add("PerformanceEvaluationId", new ColumnHeader { displayHeader = "PerformanceEvaluation ID" });
            settings.ColumnSettings.Add("PerformanceEvaluationSubject", new ColumnHeader { displayHeader = "PerformanceEvaluation Subject" });
            settings.ColumnSettings.Add("PerformanceEvaluationMessage", new ColumnHeader { displayHeader = "PerformanceEvaluation Message" });
            settings.ColumnSettings.Add("PerformanceEvaluationStatus", new ColumnHeader { displayHeader = "PerformanceEvaluation Status" });
            settings.ColumnSettings.Add("PerformanceEvaluationDateTime", new ColumnHeader { displayHeader = "PerformanceEvaluation Date Time" });
            settings.ColumnSettings.Add("ServiceCenterId", new ColumnHeader { displayHeader = "Service Center ID" });

            settings.FieldSettings.Add("PerformanceEvaluationId", new InputType { type = "text", displayLabel = "PerformanceEvaluation ID", editable = false, primaryKey = true });
            settings.FieldSettings.Add("PerformanceEvaluationSubject", new InputType { type = "text", displayLabel = "PerformanceEvaluation Subject", editable = true, primaryKey = false });
            settings.FieldSettings.Add("PerformanceEvaluationMessage", new InputType { type = "text", displayLabel = "PerformanceEvaluation Message", editable = true, primaryKey = false });
            settings.FieldSettings.Add("PerformanceEvaluationStatus", new InputType { type = "text", displayLabel = "PerformanceEvaluation Status", editable = true, primaryKey = false });
            settings.FieldSettings.Add("PerformanceEvaluationDateTime", new InputType { type = "datetime", displayLabel = "PerformanceEvaluation Date Time", editable = true, primaryKey = false });



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
    }
}
