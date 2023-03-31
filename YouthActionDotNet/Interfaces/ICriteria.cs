using System.Collections.Generic;

namespace YouthActionDotNet.Controllers
{
    public interface ICriteria<T>
    {
        List<T> MeetCriteria(List<T> items);
    }
}

