import { WithStateToProps } from "typestately";
import Counter, { Props } from "./Counter"
import counterStateHandler from "./State/CounterStateHandler";
import CounterState from "./State/CounterState";

export default WithStateToProps<CounterState, Props>(
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