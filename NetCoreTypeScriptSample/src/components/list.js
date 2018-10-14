"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const listItem_1 = require("./listItem");
class List extends React.Component {
    render() {
        return (React.createElement("div", { className: "list-group col-sm-10" }, this.props.fullNames.map((e, i) => React.createElement(listItem_1.ListItem, { key: i, fullName: e }))));
    }
}
exports.List = List;
