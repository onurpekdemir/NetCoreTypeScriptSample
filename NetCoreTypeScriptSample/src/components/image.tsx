import * as React from "react";

let Logo = "https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png";

export default class ImageComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>A Simple React Component Example with Typescript</h1>
                <div>
                    <img src={Logo} />
                </div>
            </div>
        );
    }
}