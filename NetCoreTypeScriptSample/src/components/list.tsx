import React = require("react");
import { ListItem } from "./listItem";

export class List extends React.Component<{ fullNames: Array<string> }> {

    public render() {
        return (
            <div className="list-group col-sm-10">
                {this.props.fullNames.map((e, i) => <ListItem key={i} fullName={e} />)}
            </div>)
    }
}