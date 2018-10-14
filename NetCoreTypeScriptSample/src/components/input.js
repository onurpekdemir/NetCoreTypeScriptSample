"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const inputSize_1 = require("../utils/enums/inputSize");
const inputType_1 = require("../utils/enums/inputType");
class Input extends React.Component {
    render() {
        const { defaultValue, placeholder, inputSize, inputType, name } = this.props;
        const sizeClass = inputSize == inputSize_1.InputSize.Large ? "form-control-lg" :
            inputSize == inputSize_1.InputSize.Small ? "form-control-sm" : "";
        const type = inputType == inputType_1.InputType.Color ? "color" :
            inputType == inputType_1.InputType.Date ? "date" :
                inputType == inputType_1.InputType.DatetimeLocal ? "datetime-local" :
                    inputType == inputType_1.InputType.Email ? "email" :
                        inputType == inputType_1.InputType.Month ? "month" :
                            inputType == inputType_1.InputType.Number ? "number" :
                                inputType == inputType_1.InputType.Password ? "password" :
                                    inputType == inputType_1.InputType.Search ? "search" :
                                        inputType == inputType_1.InputType.Tel ? "tel" :
                                            inputType == inputType_1.InputType.Text ? "text" :
                                                inputType == inputType_1.InputType.Time ? "time" :
                                                    inputType == inputType_1.InputType.Url ? "url" :
                                                        inputType == inputType_1.InputType.Week ? "week" : "text";
        return (React.createElement("input", { className: `form-control shadow mb-1 bg-white rounded ${sizeClass}`, type: `${type}`, name: `${name}`, defaultValue: defaultValue, placeholder: placeholder }));
    }
}
exports.Input = Input;
