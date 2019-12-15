import React from "react";

export interface Props {
  value: number;
  clicked: Date;
  min: number;
  max: number;
  onIncrement: (clicked: Date) => void;
  onIncrementAsync: (clicked: Date) => void;
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
        <p>
          Value: {this.props.value} (clicked: {this.props.clicked.toLocaleString()})
        </p>
        <p>
          <button onClick={this.decrement} disabled={this.props.value <= this.props.min}>
            -
          </button>
          <button onClick={this.increment} disabled={this.props.value >= this.props.max}>
            +
          </button>
        </p>
        <p>
          <button onClick={this.incrementAsync} disabled={this.props.value >= this.props.max}>
            + (async)
          </button>
        </p>
      </div>
    );
  }

  private increment() {
    this.props.onIncrement(new Date());
  }

  private incrementAsync() {
    this.props.onIncrementAsync(new Date());
  }

  private decrement() {
    this.props.onDecrement(new Date());
  }
}
