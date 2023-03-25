using System;
using System.Collections.Generic;
using YouthActionDotNet.Controllers;

namespace YouthActionDotNet.Models
{
    public class StatusCriteria : ICriteria<Request>
    {
        private string choice = "";

        public StatusCriteria(string choice)
        {
            this.choice = choice;
        }

        public List<Request> MeetCriteria(List<Request> requests)
        {
            List<Request> statusResults = new List<Request>();

            // if the filter does have a selected attribute to filter by, it return the entire list
            if (choice.Equals(""))
            {
                statusResults = requests;
            }
            else
            {
                foreach (Request request in requests)
                {
                    if (request.Status.Equals(choice, StringComparison.OrdinalIgnoreCase))
                    {
                        statusResults.Add(request);
                    }
                }
            }

            return statusResults;
        }
    }
}

