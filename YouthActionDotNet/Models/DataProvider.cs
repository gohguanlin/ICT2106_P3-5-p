using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{
    public class DataProvider
    {
        //IProgress is a Interface provided by Module 2 for the project's progress data
        private IProgress progress;
        private string progressData;

        public string getProgress()
        {
            // Retrieve progress data from Module 2
            // ...

            return progressData;
        }
    }
}