using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Interfaces
{
    public abstract class AbstractForm
    {
        private int FormID;
        private int FormSenderID;
        private DateTime FormDateTime;

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