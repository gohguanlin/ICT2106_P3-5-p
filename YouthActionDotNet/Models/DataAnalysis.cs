using System.Collections.Generic;

namespace YouthActionDotNet.Models
{
    public class DataAnalysis
    {
        private string inputData;
        private string dataAnalysis;
        private IAnalysisAlgorithm analysisAlgorithm;

        public DataAnalysis(string compiledProgress, string dataAnalysis)
        {
            this.inputData = compiledProgress;
            this.dataAnalysis = dataAnalysis;
        }

        public string analyzeData()
        {
            return analysisAlgorithm.analyzeData();
        }
    }
}