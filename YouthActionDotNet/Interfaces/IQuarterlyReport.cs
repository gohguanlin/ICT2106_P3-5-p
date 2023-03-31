using System.Collections.Generic;

namespace YouthActionDotNet.Interfaces
{
    public interface IQuarterlyReport
    {
        void getQuarterlyReport(string reportId);
        void generatePDF(string reportId);
    }
}