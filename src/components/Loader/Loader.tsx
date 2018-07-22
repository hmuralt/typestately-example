import * as React from "react";

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
        let loading = "";

        if (this.props.status === Status.Loading) {
            loading = "loading component...";
        }

        if (this.props.status === Status.Updating) {
            loading = "updating component...";
        }

        return (
            <div className="c-loader">
                <div className="text">{loading}</div>
                {this.props.children}
            </div>
        );
    }
}