"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.onDropdownChange = (e) => {
            alert("You've selected ".concat(e.target.value));
        };
    }
    render() {
        return (React.createElement("select", { name: this.props.name, onChange: this.onDropdownChange, className: "form-control" }, this.props.val.map(s => React.createElement("option", { id: s.key, key: s.key },
            " ",
            s.value))));
    }
}
exports.Dropdown = Dropdown;
