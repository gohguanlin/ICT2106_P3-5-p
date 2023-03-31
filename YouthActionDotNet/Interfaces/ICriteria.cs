using System.Collections.Generic;

namespace YouthActionDotNet.Interfaces
{
    public interface ICriteria<T>
    {
        List<T> MeetCriteria(List<T> items);
    }
}

