using System;
using System.Collections.Generic;

namespace YouthActionDotNet.Models
{
    public class PerformanceCriteria : ICriteria<PerformanceEvaluation>
    {
        private string choice = "";

        public PerformanceCriteria(string choice)
        {
            this.choice = choice;
        }

        public List<PerformanceEvaluation> MeetCriteria(List<PerformanceEvaluation> evaluations)
        {
            List<PerformanceEvaluation> performanceResults = new List<PerformanceEvaluation>();

            // if the filter does have a selected attribute to filter by, it return the entire list
            if (choice.Equals(""))
            {
                performanceResults = evaluations;
            }
            else
            {
                foreach (PerformanceEvaluation evaluation in evaluations)
                {
                    if (evaluation.PerformanceEvaluationGrading.Equals(choice, StringComparison.OrdinalIgnoreCase))
                    {
                        performanceResults.Add(evaluation);
                    }
                }
            }

            return performanceResults;
        }
    }
}

