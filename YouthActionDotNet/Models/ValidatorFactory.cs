using System.Collections.Generic;
using YouthActionDotNet.Interfaces;

public class ValidatorFactory
{
    public Validator createValidator(string input)
    {
        Validator validator = null;
        switch (inputType)
        {
            case "text":
                validator = new TextValidator();
                break;
            case "number":
                validator = new NumberValidator();
                break;
            case "date":
                validator = new DateValidator();
                break;
            default:
                throw new IllegalArgumentException("Invalid input type: " + input);
        }
        return validator;
    }
}