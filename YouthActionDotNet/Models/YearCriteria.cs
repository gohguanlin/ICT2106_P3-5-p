using System;
using System.Collections.Generic;

namespace YouthActionDotNet.Models
{
    public class YearCriteria : ICriteria<PerformanceEvaluation>
    {
        private string choice = "";

        public YearCriteria(string choice)
        {
            this.choice = choice;
        }

        public List<PerformanceEvaluation> MeetCriteria(List<PerformanceEvaluation> evaluations)
        {
            List<PerformanceEvaluation> yearResults = new List<PerformanceEvaluation>();

            // if the filter does have a selected attribute to filter by, it return the entire list
            if (choice.Equals(""))
            {
                yearResults = evaluations;
            }
            else
            {
                foreach (PerformanceEvaluation evaluation in evaluations)
                {
                    if (evaluation.PerformanceEvaluationYear.Equals(choice, StringComparison.OrdinalIgnoreCase))
                    {
                        yearResults.Add(evaluation);
                    }
                }
            }

            return yearResults;
        }
    }
}
