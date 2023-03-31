using System.Collections.Generic;

namespace YouthActionDotNet.Interfaces
{
    public interface IFilterSystem<T>
    {
        List<T> filterCriteria(List<T> items, string[] query);
        ICriteria<T> CombineCriteria(List<ICriteria<T>> criteriaList);
    }
}
