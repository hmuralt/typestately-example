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

const Counter: React.FC<Props> = (props) => {
  const decrement = () => props.onDecrement(new Date());
  const increment = () => props.onIncrement(new Date());
  const incrementAsync = () => props.onIncrementAsync(new Date());

  return (
    <div>
      <p>
        Value: {props.value} (clicked: {props.clicked.toLocaleString()})
      </p>
      <p>
        <button onClick={decrement} disabled={props.value <= props.min}>
          -
        </button>
        <button onClick={increment} disabled={props.value >= props.max}>
          +
        </button>
      </p>
      <p>
        <button onClick={incrementAsync} disabled={props.value >= props.max}>
          + (async)
        </button>
      </p>
    </div>
  );
};

export default Counter;
