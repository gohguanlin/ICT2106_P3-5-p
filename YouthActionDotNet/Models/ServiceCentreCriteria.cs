using System;
using System.Collections.Generic;
using YouthActionDotNet.Controllers;

namespace YouthActionDotNet.Models
{
    public class ServiceCentreCriteria : ICriteria<PerformanceEvaluation>
    {
        private string choice = "";

        public ServiceCentreCriteria(string choice)
        {
            this.choice = choice;
        }

        public List<PerformanceEvaluation> MeetCriteria(List<PerformanceEvaluation> evaluations)
        {
            List<PerformanceEvaluation> serviceCentreResults = new List<PerformanceEvaluation>();

            // if the filter does have a selected attribute to filter by, it return the entire list
            if (choice.Equals(""))
            {
                serviceCentreResults = evaluations;
            }
            else
            {
                foreach (PerformanceEvaluation evaluation in evaluations)
                {
                    if (evaluation.ServiceCenterId.Equals(choice, StringComparison.OrdinalIgnoreCase))
                    {
                        serviceCentreResults.Add(evaluation);
                    }
                }
            }

            return serviceCentreResults;
        }
    }
}
