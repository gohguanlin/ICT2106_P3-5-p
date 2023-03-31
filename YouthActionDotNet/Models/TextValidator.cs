using System.Collections.Generic;
using YouthActionDotNet.Interfaces;

namespace YouthActionDotNet.Models
{
    public class TextValidator : IValidator
    {
        public bool validate(string input)
        {
            return true;
        }
    }
}