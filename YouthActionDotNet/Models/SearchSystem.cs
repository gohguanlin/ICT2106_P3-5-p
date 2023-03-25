using System.Collections.Generic;
using YouthActionDotNet.Controllers;

namespace YouthActionDotNet.Models
{
    public class SearchSystem : ISearchSystem
    {
        public string search(string category)
        {
            return category;
        }
    }
}