using System.Collections.Generic;
using YouthActionDotNet.Interfaces;

namespace YouthActionDotNet.Models
{
    public class DropDownListValidator : IValidator
    {
        public bool validate(string input)
        {
            return true;
        }
    }
}