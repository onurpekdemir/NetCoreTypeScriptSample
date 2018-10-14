import * as React from "react";
import { InputSize } from "../utils/enums/inputSize";
import { InputType } from "../utils/enums/inputType";
import { IInputProps } from "../utils/inputProps";

export class Input extends React.Component<IInputProps> {

    public render() {

        const { defaultValue, placeholder, inputSize, inputType, name } = this.props;

        const sizeClass :string = inputSize == InputSize.Large ? "form-control-lg" :
                          inputSize == InputSize.Small ? "form-control-sm" : "";

        const type : string  = inputType == InputType.Color ? "color" :
                     inputType == InputType.Date ? "date" :
                     inputType == InputType.DatetimeLocal ? "datetime-local" :
                     inputType == InputType.Email ? "email" :
                     inputType == InputType.Month ? "month" :
                     inputType == InputType.Number ? "number" :
                     inputType == InputType.Password ? "password" :
                     inputType == InputType.Search ? "search" :
                     inputType == InputType.Tel ? "tel" :
                     inputType == InputType.Text ? "text" :
                     inputType == InputType.Time ? "time" :
                     inputType == InputType.Url ? "url" :
                     inputType == InputType.Week ? "week" : "text";


        return (<input
            className={`form-control shadow mb-1 bg-white rounded ${sizeClass}`}
            type={`${type}`}
            name={`${name}`}
            defaultValue= {defaultValue}
            placeholder= {placeholder} />);
    }
}