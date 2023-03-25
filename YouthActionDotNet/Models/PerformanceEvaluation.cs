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

        public string PerformanceEvaluationGrading { get; set; }

        public string PerformanceEvaluationStatistics { get; set; }

        public string PerformanceEvaluationDoneWell { get; set; }

        public string PerformanceEvaluationImprovements { get; set; }

        public string PerformanceEvaluationOthers { get; set; }
        public DateTime PerformanceDateTime { get; set; }

        public string ServiceCenterId { get; set; }
        public string PerformanceEvaluationQuarter { get; set; }
        public string PerformanceEvaluationYear { get; set; }

        [JsonIgnore]
        public virtual ServiceCenter servicecenter { get; set; }
    }
}