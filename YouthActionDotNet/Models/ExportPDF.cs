using System.Collections.Generic;

namespace YouthActionDotNet.Models
{
    public class ExportPDF : IReportFormat
    {
        private string compiledProgress;
        private string dataAnalysis;
        private string outputReport;

        public ExportPDF(string compiledProgress, string dataAnalysis)
        {
            this.compiledProgress = compiledProgress;
            this.dataAnalysis = dataAnalysis;
        }

        public void exportReport()
        {
            // Generate PDF report
            // ...
        }
    }
}