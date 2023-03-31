using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{
    public class Request : AbstractForm
    {
        public Request()
        {
            this.FormID = Guid.NewGuid().ToString();
        }

        private string ProjectId;
        private string RequestResourceTypeTime;
        private string RequestResourceTypeSpace;
        private string RequestResourceTypeDonor;
        private string RequestResourceTypeMoney;
        private string RequestResourceTypeVolunteer;
        private string RequestDescription;
        private string Status;

        [JsonIgnore]
        public virtual User user { get; set; }
        [JsonIgnore]
        public virtual Project project { get; set; }

        private string getRequestResourceTypeTime()
        {
            return this.RequestResourceTypeTime;
        }
        private void setRequestResourceTypeTime(string RequestResourceTypeTime)
        {
            this.RequestResourceTypeTime = RequestResourceTypeTime;
        }
        private string getRequestResourceTypeSpace()
        {
            return this.RequestResourceTypeTime;
        }
        private void setRequestResourceTypeSpace(string RequestResourceTypeSpace)
        {
            this.RequestResourceTypeSpace = RequestResourceTypeSpace;
        }
        private string getRequestResourceTypeDonor()
        {
            return this.RequestResourceTypeDonor;
        }
        private void setRequestResourceTypeDonor(string RequestResourceTypeDonor)
        {
            this.RequestResourceTypeDonor = RequestResourceTypeDonor;
        }
        private string getRequestResourceTypeMoney()
        {
            return this.RequestResourceTypeMoney;
        }
        private void setRequestResourceTypeMoney(string RequestResourceTypeMoney)
        {
            this.RequestResourceTypeMoney = RequestResourceTypeMoney;
        }
        private string getRequestResourceTypeVolunteer()
        {
            return this.RequestResourceTypeVolunteer;
        }
        private void setRequestResourceTypeVolunteer(string RequestResourceTypeVolunteer)
        {
            this.RequestResourceTypeVolunteer = RequestResourceTypeVolunteer;
        }

        private string getRequestDescription()
        {
            return this.RequestDescription;
        }
        private void setRequestDescription(string RequestDesc)
        {
            this.RequestDescription = RequestDesc;
        }
        private string getStatus()
        {
            return this.Status;
        }
        private void setStatus(string Status)
        {
            this.Status = Status;
        }
        private string getProjectId()
        {
            return this.ProjectId;
        }

        public void setRequestFormDetails(string RequestId, string RequestResourceTypeTime,
        string RequestResourceTypeSpace, string RequestResourceTypeDonor,
        string RequestResourceTypeMoney, string RequestResourceTypeVolunteer,
        string RequestDesc, string RequesterId, string Status,
        string ProjectId, string DateOfRequest)
        {
            FormID = RequestId;
            this.RequestResourceTypeTime = RequestResourceTypeTime;
            this.RequestResourceTypeSpace = RequestResourceTypeSpace;
            this.RequestResourceTypeDonor = RequestResourceTypeDonor;
            this.RequestResourceTypeMoney = RequestResourceTypeMoney;
            this.RequestResourceTypeVolunteer = RequestResourceTypeVolunteer;
            RequestDescription = RequestDesc;
            FormSenderID = RequesterId;
            FormDateTime = DateOfRequest;
            this.Status = Status;
            this.ProjectId = ProjectId;
        }
    }
}