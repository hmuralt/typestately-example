import * as React from "react";

export interface Props {
    value: number;
    clicked: Date;
    onIncrement: (clicked: Date) => void;
    onIncrementAsync: (clicked: Date) => Promise<void>;
    onDecrement: (clicked: Date) => void;
}

export default class Counter extends React.Component<Props> {

    constructor(props: Props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    public render() {
        return (
            <div>
                <p>Value: {this.props.value} (clicked: {this.props.clicked.toLocaleString()})</p>
                <p>
                    <button onClick={this.increment}> + </button>
                    <button onClick={this.decrement}> - </button>
                </p>
                <p>
                    <button onClick={this.incrementAsync}> + (async) </button>
                </p>
            </div>
        );
    }

    private increment() {
        this.props.onIncrement(new Date());
    }

    private incrementAsync() {
        this.props
            .onIncrementAsync(new Date())
            .then(() =>
                // tslint:disable-next-line:no-console
                console.log("async done!")
            );
    }

    private decrement() {
        this.props.onDecrement(new Date());
    }
}