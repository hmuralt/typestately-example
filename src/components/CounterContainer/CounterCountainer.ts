import { WithStateToProps } from "typestately";
import Counter, { Props } from "../Counter/Counter";
import counterStateHandler from "./CounterStateHandler";
import State from "./CounterState";

export default WithStateToProps<State, Props>(
    counterStateHandler.stateProvider,
    (counterState) => {
        return {
            value: counterState.value,
            clicked: counterState.clicked,
            onIncrement: (clicked: Date) => counterStateHandler.dispatchIncrement(clicked),
            onIncrementAsync: (clicked: Date) => counterStateHandler.incrementAsync(clicked),
            onDecrement: (clicked: Date) => counterStateHandler.dispatchDecrement(clicked)
        };
    }
)(Counter);