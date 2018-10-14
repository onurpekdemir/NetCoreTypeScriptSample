import * as React from "react";
import { Input } from './input'
import { IInputProps } from "../utils/inputProps";
import { InputSize } from "../utils/enums/inputSize";
import { InputType } from "../utils/enums/inputType";
import { Dropdown } from "./dropdown";
import { IDropdownProps } from "../utils/dropdownProps";


export  class Form extends React.Component<{onNewRecordAdded}> {

    submitForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/home/adduser', {
            method: 'POST',
            body: data,
        }).then(response => {
            response.json().then(data => {
                this.props.onNewRecordAdded(data.fullName);
                alert("User has been saved")
            })
        })

    };

    render() {
        let nameInputProps: IInputProps = { placeholder: "Name", defaultValue: "Onur", name:"Name" };

        let dropdownProps: Array<IDropdownProps> = [];
        dropdownProps.push({ key: "1", value: "Male" })
        dropdownProps.push({ key: "2", value: "Female" })

        return (
            <form onSubmit={this.submitForm}>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label ">Name</label>
                    <div className="col-sm-10">
                        <Input {...nameInputProps} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Surname</label>
                    <div className="col-sm-10">
                        <Input name="Surname"  placeholder="Pekdemir" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <Input name="Email" placeholder="example@example.com" inputType={InputType.Email} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <Input name="Password"  inputType={InputType.Password} inputSize={InputSize.Large} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <Dropdown name="Gender"  val = {dropdownProps} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-3">
                        <input type="submit" value="Submit" className="btn btn-success form-control" />
                    </div>
                </div>
            </form>
        );
    }
}



