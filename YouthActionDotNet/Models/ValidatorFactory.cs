using System.Collections.Generic;
using YouthActionDotNet.Interfaces;

namespace YouthActionDotNet.Models
{
    public class ValidatorFactory
    {
        public IValidator createValidator(string input)
        {
            IValidator validator = null;
            switch (input)
            {
                case "text":
                    validator = new TextValidator();
                    break;
                case "number":
                    validator = new CheckboxValidator();
                    break;
                case "date":
                    validator = new DropDownListValidator();
                    break;
                default:
                    throw new IllegalArgumentException("Invalid input type: " + input);
            }
            return validator;
        }
    }
}
