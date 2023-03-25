using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{
    public class Request
    {
        public Request()
        {
            this.RequestId = Guid.NewGuid().ToString();
        }
        public string RequestId { get; set; }
        public string RequestResourceType { get; set; }
        public string RequestDesc { get; set; }
        public string Status { get; set; }
        public string RequesterId { get; set; }
        public string ProjectId { get; set; }
        public DateTime DateOfRequest { get; set; }

        [JsonIgnore]
        public virtual User user { get; set; }
        [JsonIgnore]
        public virtual Project project { get; set; }

    }

}