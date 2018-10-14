import * as React from "react";
import * as ReactDOM from "react-dom";
import { Form } from "./form";
import { List } from "./list";

export default class App extends React.Component<{}, { fullNames: Array<string> }> {
    constructor(props) {
        super(props)
        this.state = { fullNames: [] };
    }

    onNewRecordAdded = (record: string) => {
        this.setState({
            fullNames: [...this.state.fullNames, record]
        })
    }

    public render() {

        return (
            <div>
                <h1>Hello, Welcome to the first page</h1>
                <Form onNewRecordAdded={this.onNewRecordAdded} />
                <List fullNames={this.state.fullNames} />
            </div>);
    }

}