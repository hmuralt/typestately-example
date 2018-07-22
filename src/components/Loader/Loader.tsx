import * as React from "react";
import "./Loader.css";

export enum Status {
    Done,
    Loading,
    Updating
}

export interface Props {
    status: Status;
}

export default class Loader extends React.Component<Props> {
    public render() {
        if (this.props.status === Status.Done) {
            return (
                this.props.children
            );
        }

        return (
            <div className="loader-container">
                <div className="overlay">{this.props.status === Status.Loading ? "Loading..." : "Updating..."}</div>
                {this.props.children}
            </div>
        );
    }
}