using System.Collections.Generic;

namespace YouthActionDotNet.Models
{
    public class AnalyzeByProgress : IAnalysisAlgorithm
    {
        private string inputData;
        private string analysisResult;

        public AnalyzeByProgress(string inputData)
        {
            this.inputData = inputData;
        }

        public string analyzeData()
        {
            // Analyze data by progress
            // ...
            return analysisResult;
        }
    }
}