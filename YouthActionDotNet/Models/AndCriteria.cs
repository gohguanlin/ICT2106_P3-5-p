using System.Collections.Generic;

namespace YouthActionDotNet.Models
{
    public class AndCriteria<T> : ICriteria<T>
    {
        private ICriteria<T> criteria;
        private ICriteria<T> otherCriteria;

        public AndCriteria(ICriteria<T> criteria, ICriteria<T> otherCriteria)
        {
            this.criteria = criteria;
            this.otherCriteria = otherCriteria;
        }

        public List<T> MeetCriteria(List<T> items)
        {
            List<T> firstCriteria = criteria.MeetCriteria(items);
            return otherCriteria.MeetCriteria(firstCriteria);
        }
    }
}

