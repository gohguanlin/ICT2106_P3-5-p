using System.Collections.Generic;
using YouthActionDotNet.Controllers;

namespace YouthActionDotNet.Models
{
    public class PerformanceEvaluationFilterSystem : IFilterSystem<PerformanceEvaluation>
    {
        public List<PerformanceEvaluation> filterCriteria(List<PerformanceEvaluation> evaluations, string[] query)
        {
            // Formation of filter
            List<ICriteria<PerformanceEvaluation>> criteriaList = new List<ICriteria<PerformanceEvaluation>>();

            ICriteria<PerformanceEvaluation> serviceCentreResult = new ServiceCentreCriteria(query[0]);
            ICriteria<PerformanceEvaluation> performanceResult = new PerformanceCriteria(query[1]);
            ICriteria<PerformanceEvaluation> quarterResult = new QuarterCriteria(query[2]);
            ICriteria<PerformanceEvaluation> yearResult = new YearCriteria(query[3]);

            criteriaList.Add(serviceCentreResult);
            criteriaList.Add(performanceResult);
            criteriaList.Add(quarterResult);
            criteriaList.Add(yearResult);

            // Recursively combine filters
            ICriteria<PerformanceEvaluation> combinedCriteria = CombineCriteria(criteriaList);

            // Filter the evaluations using the combined filter and return
            return combinedCriteria.MeetCriteria(evaluations);
        }

        public ICriteria<PerformanceEvaluation> CombineCriteria(List<ICriteria<PerformanceEvaluation>> criteriaList)
        {
            // Recursion for combining filters
            // Base Case 
            if (criteriaList.Count == 1)
            {
                return criteriaList[0];
            }
            else if (criteriaList.Count == 2)
            {
                return new AndCriteria<PerformanceEvaluation>(criteriaList[0], criteriaList[1]);
            }
            // Recursive Case
            else
            {
                int middleIndex = criteriaList.Count / 2;

                List<ICriteria<PerformanceEvaluation>> leftCriteriaList = criteriaList.GetRange(0, middleIndex);
                List<ICriteria<PerformanceEvaluation>> rightCriteriaList = criteriaList.GetRange(middleIndex, criteriaList.Count - middleIndex);

                ICriteria<PerformanceEvaluation> leftCombinedCriteria = CombineCriteria(leftCriteriaList);
                ICriteria<PerformanceEvaluation> rightCombinedCriteria = CombineCriteria(rightCriteriaList);

                return new AndCriteria<PerformanceEvaluation>(leftCombinedCriteria, rightCombinedCriteria);
            }
        }
    }
}

