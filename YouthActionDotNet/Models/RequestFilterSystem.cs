using System.Collections.Generic;
using YouthActionDotNet.Controllers;

namespace YouthActionDotNet.Models
{
    public class RequestFilterSystem : IFilterSystem<Request>
    {
        public List<Request> filterCriteria(List<Request> requests, string[] query)
        {
            // Formation of filter
            List<ICriteria<Request>> criteriaList = new List<ICriteria<Request>>();

            ICriteria<Request> resourceResult = new ResourceCriteria(query[0]);
            ICriteria<Request> statusResult = new StatusCriteria(query[1]);

            criteriaList.Add(resourceResult);
            criteriaList.Add(statusResult);

            // Recursively combine filters
            ICriteria<Request> combinedCriteria = CombineCriteria(criteriaList);

            // Filter the requests using the combined filter and return
            return combinedCriteria.MeetCriteria(requests);
        }

        public ICriteria<Request> CombineCriteria(List<ICriteria<Request>> criteriaList)
        {
            // Recursion for combining filters
            // Base Case 
            if (criteriaList.Count == 1)
            {
                return criteriaList[0];
            }
            else if (criteriaList.Count == 2)
            {
                return new AndCriteria<Request>(criteriaList[0], criteriaList[1]);
            }
            // Recursive Case
            else
            {
                int middleIndex = criteriaList.Count / 2;

                List<ICriteria<Request>> leftCriteriaList = criteriaList.GetRange(0, middleIndex);
                List<ICriteria<Request>> rightCriteriaList = criteriaList.GetRange(middleIndex, criteriaList.Count - middleIndex);

                ICriteria<Request> leftCombinedCriteria = CombineCriteria(leftCriteriaList);
                ICriteria<Request> rightCombinedCriteria = CombineCriteria(rightCriteriaList);

                return new AndCriteria<Request>(leftCombinedCriteria, rightCombinedCriteria);
            }
        }
    }
}