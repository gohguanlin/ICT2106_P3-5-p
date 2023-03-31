using System;
using System.Collections.Generic;
using YouthActionDotNet.Interfaces;

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
                    // use the query to determine the attribute to match
                    switch (choice)
                    {
                        case ("Time"):
                            if (!request.RequestResourceTypeTime.Equals(""))
                            {
                                resourceResults.Add(request);
                            }
                            break;
                        case ("Space"):
                            if (!request.RequestResourceTypeSpace.Equals(""))
                            {
                                resourceResults.Add(request);
                            }
                            break;
                        case ("Donor"):
                            if (!request.RequestResourceTypeDonor.Equals(""))
                            {
                                resourceResults.Add(request);
                            }
                            break;
                        case ("Money"):
                            if (!request.RequestResourceTypeMoney.Equals(""))
                            {
                                resourceResults.Add(request);
                            }
                            break;
                        case ("Volunteer"):
                            if (!request.RequestResourceTypeVolunteer.Equals(""))
                            {
                                resourceResults.Add(request);
                            }
                            break;
                    }
                }
            }

            return resourceResults;
        }
    }
}