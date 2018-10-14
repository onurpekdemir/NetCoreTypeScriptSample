import * as React from "react";
import { IDropdownProps } from "../utils/dropdownProps";


export class Dropdown extends React.Component<{name: string ,val : Array<IDropdownProps>}> {

    constructor(props) {
        super(props);
    }

    onDropdownChange = (e) => {
        alert("You've selected ".concat(e.target.value));
    }

    public render() {
        return (
            <select name={this.props.name} onChange={this.onDropdownChange} className="form-control">
                {
                    this.props.val.map(s =>
                        <option id={s.key} key={s.key}> {s.value}</option>)
                }
            </select>
        );
    }
}