import React = require("react");

export class ListItem extends React.Component<{ fullName: string }> {

    public render() {
        return (<li className="list-group-item disabled">{this.props.fullName}</li>)
    }
}