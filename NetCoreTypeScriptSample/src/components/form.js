"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const input_1 = require("./input");
const inputSize_1 = require("../utils/enums/inputSize");
const inputType_1 = require("../utils/enums/inputType");
const dropdown_1 = require("./dropdown");
class Form extends React.Component {
    constructor() {
        super(...arguments);
        this.submitForm = (event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            fetch('/home/adduser', {
                method: 'POST',
                body: data,
            }).then(response => {
                response.json().then(data => {
                    this.props.onNewRecordAdded(data.fullName);
                });
            });
        };
    }
    render() {
        let nameInputProps = { placeholder: "Name", defaultValue: "Onur", name: "Name" };
        let dropdownProps = [];
        dropdownProps.push({ key: "1", value: "Male" });
        dropdownProps.push({ key: "2", value: "Female" });
        return (React.createElement("form", { onSubmit: this.submitForm },
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { className: "col-sm-2 col-form-label " }, "Name"),
                React.createElement("div", { className: "col-sm-10" },
                    React.createElement(input_1.Input, Object.assign({}, nameInputProps)))),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { className: "col-sm-2 col-form-label" }, "Surname"),
                React.createElement("div", { className: "col-sm-10" },
                    React.createElement(input_1.Input, { name: "Surname", placeholder: "Pekdemir" }))),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { className: "col-sm-2 col-form-label" }, "Email"),
                React.createElement("div", { className: "col-sm-10" },
                    React.createElement(input_1.Input, { name: "Email", placeholder: "example@example.com", inputType: inputType_1.InputType.Email }))),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { className: "col-sm-2 col-form-label" }, "Password"),
                React.createElement("div", { className: "col-sm-10" },
                    React.createElement(input_1.Input, { name: "Password", inputType: inputType_1.InputType.Password, inputSize: inputSize_1.InputSize.Large }))),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { className: "col-sm-2 col-form-label" }, "Gender"),
                React.createElement("div", { className: "col-sm-10" },
                    React.createElement(dropdown_1.Dropdown, { name: "Gender", val: dropdownProps }))),
            React.createElement("div", { className: "form-group" },
                React.createElement("div", { className: "col-sm-3" },
                    React.createElement("input", { type: "submit", value: "Submit", className: "btn btn-success form-control" })))));
    }
}
exports.Form = Form;
