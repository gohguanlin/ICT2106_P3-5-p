using System.Collections.Generic;
using YouthActionDotNet.Interfaces;

namespace YouthActionDotNet.Models
{
    public class CheckboxValidator : IValidator
    {
        public bool validate(string input)
        {
            return true;
        }
    }
}