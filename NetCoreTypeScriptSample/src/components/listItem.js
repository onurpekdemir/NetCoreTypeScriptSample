"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ListItem extends React.Component {
    render() {
        return (React.createElement("li", { className: "list-group-item disabled" }, this.props.fullName));
    }
}
exports.ListItem = ListItem;
