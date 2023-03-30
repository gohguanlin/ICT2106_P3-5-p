using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{
    public abstract class AbstractForm
    {
        private string FormID;
        private string FormSenderID;
        private DateTime FormDateTime;


        private string getFormID()
        {
            return this.FormID;
        }
        private void setFormID(string FormID)
        {
            this.FormID = FormID;
        }

        private string getFormSenderID()
        {
            return FormSenderID;
        }

        private void setFormSenderID(string FormSenderID)
        {
            this.FormSenderID = FormSenderID;
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