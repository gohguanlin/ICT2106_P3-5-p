using System;
using Newtonsoft.Json;
using YouthActionDotNet.Interfaces;

namespace YouthActionDotNet.Models
{
    public class PerformanceEvaluation : AbstractForm
    {
        public PerformanceEvaluation()
        {
            this.FormID = Guid.NewGuid().ToString();
        }

        public string ServiceCenterId;
        public string PerformanceEvaluationGrading;
        public string PerformanceEvaluationDoneWell;
        public string PerformanceEvaluationImprovements;
        public string PerformanceEvaluationStatisticsExpenseOut;
        public string PerformanceEvaluationStatisticsDonationIn;
        public string PerformanceEvaluationStatisticsManHour;
        public string PerformanceEvaluationStatisticsProgress;
        public string PerformanceEvaluationQuarter;
        public string PerformanceEvaluationYear;

        [JsonIgnore]
        public virtual ServiceCenter servicecenter { get; set; }

        private string getServiceCenterId()
        {
            return this.ServiceCenterId;
        }
        private void setServiceCenterId(string ServiceCenterId)
        {
            this.ServiceCenterId = ServiceCenterId;
        }
        private string getPerformanceEvaluationGrading()
        {
            return this.PerformanceEvaluationGrading;
        }
        private void setPerformanceEvaluationGrading(string PerformanceEvaluationGrading)
        {
            this.PerformanceEvaluationGrading = PerformanceEvaluationGrading;
        }
        private string getPerformanceEvaluationDoneWell()
        {
            return this.PerformanceEvaluationDoneWell;
        }
        private void setPerformanceEvaluationDoneWell(string PerformanceEvaluationDoneWell)
        {
            this.PerformanceEvaluationDoneWell = PerformanceEvaluationDoneWell;
        }
        private string getPerformanceEvaluationStatisticsExpenseOut()
        {
            return this.PerformanceEvaluationStatisticsExpenseOut;
        }
        private void setPerformanceEvaluationStatisticsExpenseOut(string PerformanceEvaluationStatisticsExpenseOut)
        {
            this.PerformanceEvaluationStatisticsExpenseOut = PerformanceEvaluationStatisticsExpenseOut;
        }
        private string getPerformanceEvaluationStatisticsDonationIn()
        {
            return this.PerformanceEvaluationStatisticsDonationIn;
        }
        private void setPerformanceEvaluationStatisticsDonationIn(string PerformanceEvaluationStatisticsDonationIn)
        {
            this.PerformanceEvaluationStatisticsDonationIn = PerformanceEvaluationStatisticsDonationIn;
        }
        private string getPerformanceEvaluationStatisticsManHour()
        {
            return this.PerformanceEvaluationStatisticsManHour;
        }
        private void setPerformanceEvaluationStatisticsManHour(string PerformanceEvaluationStatisticsManHour)
        {
            this.PerformanceEvaluationStatisticsManHour = PerformanceEvaluationStatisticsManHour;
        }
        private string getPerformanceEvaluationStatisticsProgress()
        {
            return this.PerformanceEvaluationStatisticsProgress;
        }
        private void setPerformanceEvaluationStatisticsProgress(string PerformanceEvaluationStatisticsProgress)
        {
            this.PerformanceEvaluationStatisticsProgress = PerformanceEvaluationStatisticsProgress;
        }
        private string getPerformanceEvaluationQuarter()
        {
            return this.PerformanceEvaluationQuarter;
        }
        private void setPerformanceEvaluationQuarter(string PerformanceEvaluationQuarter)
        {
            this.PerformanceEvaluationQuarter = PerformanceEvaluationQuarter;
        }
        private string getPerformanceEvaluationYear()
        {
            return this.PerformanceEvaluationYear;
        }
        private void setPerformanceEvaluationYear(string PerformanceEvaluationYear)
        {
            this.PerformanceEvaluationYear = PerformanceEvaluationYear;
        }

        public void setPerformanceEvaluation(string perfID, string perfGrading,
        string perfStatsExpenseOut, string perfStatsDonationIn,
        string perfStatsManHour, string perfStatsProgress,
        string perfDoneWell, string perfImprovements,
        string perfQuarter, string perfYear, string serviceCenterId,
        string perfDateTime, string perfSender)
        {
            FormID = perfID;
            PerformanceEvaluationGrading = perfGrading;
            PerformanceEvaluationStatisticsExpenseOut = perfStatsExpenseOut;
            PerformanceEvaluationStatisticsDonationIn = perfStatsDonationIn;
            PerformanceEvaluationStatisticsManHour = perfStatsManHour;
            PerformanceEvaluationStatisticsProgress = perfStatsProgress;
            PerformanceEvaluationDoneWell = perfDoneWell;
            PerformanceEvaluationImprovements = perfImprovements;
            PerformanceEvaluationQuarter = perfQuarter;
            PerformanceEvaluationYear = perfYear;
            ServiceCenterId = serviceCenterId;
            FormDateTime = perfDateTime;
            FormSenderID = perfSender;
        }
    }
}