"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
let Logo = "https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png";
class ImageComponent extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "A Simple React Component Example with Typescript"),
            React.createElement("div", null,
                React.createElement("img", { src: Logo }))));
    }
}
exports.default = ImageComponent;
