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

        public string QuarterlyReportId;
        public string QuarterlyReportQuarter;
        public string QuarterlyReportYear;
        public string QuarterlyReportPieChartData;
        public string QuarterlyReportBarGraphData;
        public DateTime QuarterDate;
        public string ServiceCenterId;

        [JsonIgnore]
        public virtual ServiceCenter servicecenter { get; set; }

        private string getQuarterlyReportId()
        {
            return this.QuarterlyReportId;
        }
        private void setQuarterlyReportId(string QuarterlyReportId)
        {
            this.QuarterlyReportId = QuarterlyReportId;
        }
        private string getQuarterlyReportQuarter()
        {
            return this.QuarterlyReportQuarter;
        }
        private void setQuarterlyReportQuarter(string QuarterlyReportQuarter)
        {
            this.QuarterlyReportQuarter = QuarterlyReportQuarter;
        }
        private string getQuarterlyReportYear()
        {
            return this.QuarterlyReportYear;
        }
        private void setQuarterlyReportYear(string QuarterlyReportYear)
        {
            this.QuarterlyReportYear = QuarterlyReportYear;
        }
        private string getQuarterlyReportPieChartData()
        {
            return this.QuarterlyReportPieChartData;
        }
        private void setQuarterlyReportPieChartData(string QuarterlyReportPieChartData)
        {
            this.QuarterlyReportPieChartData = QuarterlyReportPieChartData;
        }
        private string getQuarterlyReportBarGraphData()
        {
            return this.QuarterlyReportBarGraphData;
        }
        private void setQuarterlyReportBarGraphData(string QuarterlyReportBarGraphData)
        {
            this.QuarterlyReportBarGraphData = QuarterlyReportBarGraphData;
        }
        private DateTime getQuarterDate()
        {
            return this.QuarterDate;
        }
        private void setQuarterDate(DateTime QuarterDate)
        {
            this.QuarterDate = QuarterDate;
        }
        private string getServiceCenterId()
        {
            return this.ServiceCenterId;
        }
        private void setServiceCenterId(string ServiceCenterId)
        {
            this.ServiceCenterId = ServiceCenterId;
        }

    }
}