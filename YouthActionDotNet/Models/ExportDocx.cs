using System.Collections.Generic;

namespace YouthActionDotNet.Models
{
    public class ExportDocx : IReportFormat
    {
        private string compiledProgress;
        private string dataAnalysis;
        private string outputReport;

        public ExportDocx(string compiledProgress, string dataAnalysis)
        {
            this.compiledProgress = compiledProgress;
            this.dataAnalysis = dataAnalysis;
        }

        public void exportReport()
        {
            // Generate DOCX report
            // ...
        }
    }
}