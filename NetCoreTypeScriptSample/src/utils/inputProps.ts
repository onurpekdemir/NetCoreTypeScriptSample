import { InputSize}  from "./enums/inputSize"
import { InputType }  from "./enums/inputType"

export  interface IInputProps {
    placeholder?: string;
    defaultValue?: any;
    inputSize?: InputSize;
    inputType?: InputType;
    name?: string;
}

