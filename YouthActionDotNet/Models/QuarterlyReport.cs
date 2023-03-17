using System;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{

    public class QuarterlyReport
    {
        public QuarterlyReport()
        {
            this.QuarterlyReportId = Guid.NewGuid().ToString();
        }

        public string QuarterlyReportId { get; set; }

        public string QuarterlyReportName { get; set; }

        public string QuarterlyReportData { get; set; }

        public DateTime QuarterDate { get; set; }
        public string ServiceCenterId { get; set; }


        [JsonIgnore]
        public virtual ServiceCenter servicecenter { get; set; }

    }
}