using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Controllers
{
    public abstract class AbstractForm
    {
        private int FormID { get; set; }
        private int FormSenderID { get; set; }
        private DateTime FormDateTime { get; set; }

        private int getFormID()
        {
            return this.FormID;
        }

        private void setFormID(int formID)
        {
            this.FormID = formID;
        }

        private int GetformSenderID()
        {
            return FormSenderID;
        }

        private void SetformSenderID(int fsid)
        {
            FormSenderID = fsid;
        }

        private DateTime getFormDateTime()
        {
            return this.FormDateTime;
        }

        private void setFormDateTime(DateTime formDateTime)
        {
            this.FormDateTime = formDateTime;
        }
    }

}