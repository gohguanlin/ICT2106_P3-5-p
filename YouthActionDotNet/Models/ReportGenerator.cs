using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace YouthActionDotNet.Models
{

    public class ReportGenerator
    {
        private IReportFormat reportFormat;
        private DataCompiler dataCompiler;
        private DataAnalysis dataAnalysis;
        private string compiledProgress = "";
        private string dataAnalysis = "";
        private string outputReport = "";

        public ReportGenerator(DataCompiler dataCompiler, DataAnalysis dataAnalysis)
        {
            this.dataCompiler = dataCompiler;
            this.dataAnalysis = dataAnalysis;
        }

        public void generateReport(string compiledProgress, DataAnalysis dataAnalysis)
        {
            // Delegate report generation to selected report format
            return reportFormat.generateReport(compiledProgress, dataAnalysis);
        }
    }
}