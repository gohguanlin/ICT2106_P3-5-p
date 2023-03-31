using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{
    public class DataCompiler
    {
        private string compiledData;
        private string q1Data;
        private string q2Data;
        private string q3Data;
        private string q4Data;


        public string compileProgress()
        {
            // Compile data and store in compiledData field
            // ...

            return compiledData;
        }
    }
}