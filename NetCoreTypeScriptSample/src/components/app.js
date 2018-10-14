"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const form_1 = require("./form");
const list_1 = require("./list");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onNewRecordAdded = (record) => {
            this.setState({
                fullNames: [...this.state.fullNames, record]
            });
        };
        this.state = { fullNames: [] };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Hello, Welcome to the first page"),
            React.createElement(form_1.Form, { onNewRecordAdded: this.onNewRecordAdded }),
            React.createElement(list_1.List, { fullNames: this.state.fullNames })));
    }
}
exports.default = App;
