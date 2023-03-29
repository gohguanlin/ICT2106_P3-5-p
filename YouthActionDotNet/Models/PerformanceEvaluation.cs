using System;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{

    public class PerformanceEvaluation
    {
        public PerformanceEvaluation()
        {
            this.PerformanceEvaluationId = Guid.NewGuid().ToString();
        }

        public string PerformanceEvaluationId { get; set; }
        private string PerformanceEvaluationGrading { get; set; }
        private string PerformanceEvaluationDonewell { get; set; }
        private string PerformanceEvaluationImprovements { get; set; }
        public string PerformanceEvaluationStatisticsExpenseOut { get; set; }
        private string PerformanceEvaluationStatisticsDonationIn { get; set; }
        private string PerformanceEvaluationStatisticsManHour { get; set; }
        private string PerformanceEvaluationStatisticsProgress { get; set; }
        private string PerformanceEvaluationQuarter { get; set; }
        private string PerformanceEvaluationYear { get; set; }
        private DateTime PerformanceEvaluationDateTime { get; set; }
        public string ServiceCenterId { get; set; }


        [JsonIgnore]
        public virtual ServiceCenter servicecenter { get; set; }

        public void setPerformanceEvaluation(string performanceEvaluationStatisticsProgress, string performanceEvaluationStatisticsManHour, string performanceEvaluationStatisticsDonationIn, string performanceEvaluationStatisticsExpenseOut, string performanceEvaluationImprovements, string performanceEvaluationId, string performanceEvaluationGrading, string performanceEvaluationDonewell, string performanceEvaluationQuarter, string performanceEvaluationYear, DateTime performanceEvaluationDateTime)
        {
            PerformanceEvaluationId = performanceEvaluationId;
            PerformanceEvaluationGrading = performanceEvaluationGrading;
            PerformanceEvaluationDonewell = performanceEvaluationDonewell;
            PerformanceEvaluationImprovements = performanceEvaluationImprovements;
            PerformanceEvaluationStatisticsExpenseOut = performanceEvaluationStatisticsExpenseOut;
            PerformanceEvaluationStatisticsDonationIn = performanceEvaluationStatisticsDonationIn;
            PerformanceEvaluationStatisticsManHour = performanceEvaluationStatisticsManHour;
            PerformanceEvaluationStatisticsProgress = performanceEvaluationStatisticsProgress;
            // FormSenderID = requesterId;
            // FormDateTime = requestDateTime;
            PerformanceEvaluationQuarter = performanceEvaluationQuarter;
            PerformanceEvaluationYear = performanceEvaluationYear;
            PerformanceEvaluationDateTime = performanceEvaluationDateTime;
        }
    }
}