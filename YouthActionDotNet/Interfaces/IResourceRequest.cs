using System.Collections.Generic;

namespace YouthActionDotNet.Interfaces
{
    public interface IResourceRequest
    {
        string getRequestFormDetails(string RFF_id);
        void updateRequestFormDetails(string RFF_id);

    }
}
