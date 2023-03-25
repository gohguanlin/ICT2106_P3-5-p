using System;
using System.Collections.Generic;
using YouthActionDotNet.Controllers;

namespace YouthActionDotNet.Models
{
    public class ResourceCriteria : ICriteria<Request>
    {
        private string choice = "";

        public ResourceCriteria(string choice)
        {
            this.choice = choice;
        }

        public List<Request> MeetCriteria(List<Request> requests)
        {
            List<Request> resourceResults = new List<Request>();

            // if the filter does have a selected attribute to filter by, it return the entire list
            if (choice.Equals(""))
            {
                resourceResults = requests;
            }
            else
            {
                foreach (Request request in requests)
                {
                    if (request.RequestResourceType.Equals(choice, StringComparison.OrdinalIgnoreCase))
                    {
                        resourceResults.Add(request);
                    }
                }
            }

            return resourceResults;
        }
    }
}