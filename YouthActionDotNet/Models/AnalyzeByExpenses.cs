using System.Collections.Generic;

namespace YouthActionDotNet.Models
{
    public class AnalyzeByExpenses : IAnalysisAlgorithm
    {
        private string inputData;
        private string analysisResult;

        public AnalyzeByExpenses(string inputData)
        {
            this.inputData = inputData;
        }

        public string analyzeData()
        {
            // Analyze data by expenses
            // ...
            return analysisResult;
        }
    }
}