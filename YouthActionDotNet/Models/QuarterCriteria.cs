using System;
using System.Collections.Generic;
using YouthActionDotNet.Interfaces;

namespace YouthActionDotNet.Models
{
    public class QuarterCriteria : ICriteria<PerformanceEvaluation>
    {
        private string choice = "";

        public QuarterCriteria(string choice)
        {
            this.choice = choice;
        }

        public List<PerformanceEvaluation> MeetCriteria(List<PerformanceEvaluation> evaluations)
        {
            List<PerformanceEvaluation> quarterResults = new List<PerformanceEvaluation>();

            // if the filter does have a selected attribute to filter by, it return the entire list
            if (choice.Equals(""))
            {
                quarterResults = evaluations;
            }
            else
            {
                foreach (PerformanceEvaluation evaluation in evaluations)
                {
                    if (evaluation.PerformanceEvaluationQuarter.Equals(choice, StringComparison.OrdinalIgnoreCase))
                    {
                        quarterResults.Add(evaluation);
                    }
                }
            }

            return quarterResults;
        }
    }
}
