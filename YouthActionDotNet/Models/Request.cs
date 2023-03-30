using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{
    // public class Request: AbstractForm
    public class Request
    {
<<<<<<< Updated upstream

        // public Request()
        // {
        //     this.FormID = Guid.NewGuid().ToString();
        // }

        
        // private string ProjectId { get; set; }
        // private string RequestResourceTypeTime { get; set; }
        // private string RequestResourceTypeSpace { get; set; }
        // private string RequestResourceTypeDonor { get; set; }
        // private string RequestResourceTypeMoney { get; set; }
        // private string RequestResourceTypeVolunteer { get; set; }
        // private string RequestDescription { get; set; }
        // private string Status { get; set; }

        // [JsonIgnore]
        // public virtual User user { get; set; }
        // [JsonIgnore]
        // public virtual Project project { get; set; }



        
        // public void setRequestFormDetails(string requestId, string requestResourceTypeTime, string requestResourceTypeSpace, string requestResourceTypeDonor, string requestResourceTypeMoney, string requestResourceTypeVolunteer, string requestDescription, string requesterId, string status, string projectId, string requestDateTime)
        // {
        //     FormID = requestId;
        //     RequestResourceTypeTime = requestResourceTypeTime;
        //     RequestResourceTypeSpace = requestResourceTypeSpace;
        //     RequestResourceTypeDonor = requestResourceTypeDonor;
        //     RequestResourceTypeMoney = requestResourceTypeMoney;
        //     RequestResourceTypeVolunteer = requestResourceTypeVolunteer;
        //     RequestDescription = requestDescription;
        //     FormSenderID = requesterId;
        //     FormDateTime = requestDateTime;
        //     Status = status;
        //     ProjectId = projectId;
        // }

        public Request()
        {
            this.RequestId = Guid.NewGuid().ToString();
        }
        public string RequestId { get; set; }
        public string RequestResourceType { get; set; }        

        // used to be RequestReason
        public string RequestDesc { get; set; }
        public string Status { get; set; }
        // used to be RequestRequestedBy
        public string RequesterId { get; set; }
        public string ProjectId { get; set; }

        // used to be RequestDateTime
        public DateTime DateOfRequest { get; set; }

        // added later, for the date of agreeing to the request
        public DateTime DateOfApproval { get; set; }
        // added later, for the date of enacting the request requirements
        // couldn't come up with a better name, is Reimbursement okay in this context?
        public DateTime DateOfReimbursement { get; set; }
=======
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
>>>>>>> Stashed changes

        [JsonIgnore]
        public virtual User user { get; set; }
        [JsonIgnore]
        public virtual Project project { get; set; }
<<<<<<< Updated upstream
        // [JsonIgnore]
        // public virtual File RequestFile { get; set; }



        

    }


    // public abstract class AbstractForm
    // {
    //     private int FormID { get; set; }
    //     private int FormSenderID { get; set; }
    //     private DateTime FormDateTime { get; set; }

    //     private int getFormID()
    //     {
    //         return this.FormID;
    //     }

    //     private void setFormID(int formID)
    //     {
    //         this.FormID = formID;
    //     }

    //     private int GetformSenderID()
    //     {
    //         return formSenderID;
    //     }

    //     private void SetformSenderID(int fsid)
    //     {
    //         formSenderID = fsid;
    //     }

    //     private DateTime getFormDateTime()
    //     {
    //         return this.FormDateTime;
    //     }

    //     private void setFormDateTime(DateTime formDateTime)
    //     {
    //         this.FormDateTime = formDateTime;
    //     }
    // }

=======

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
>>>>>>> Stashed changes
}