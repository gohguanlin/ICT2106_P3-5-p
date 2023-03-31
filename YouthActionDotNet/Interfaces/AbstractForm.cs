using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
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

        private void setFormID(int FormID)
        {
            this.FormID = FormID;
        }

        private int getFormSenderID()
        {
            return FormSenderID;
        }

        private void setFormSenderID(int fsid)
        {
            this.FormSenderID = fsid;
        }

        private DateTime getFormDateTime()
        {
            return this.FormDateTime;
        }

        private void setFormDateTime(DateTime FormDateTime)
        {
            this.FormDateTime = FormDateTime;
        }
    }

}