import { WithStateToProps } from "typestately";
import { combine } from "typestately/dist/StateProvider";
import Counter, { Props } from "./Counter"
import counterStateHandler from "./State/CounterStateHandler";
import configurationStateHandler from "../../states/Configuration/ConfigurationStateHandler";

export default WithStateToProps(
    combine(
        counterStateHandler.stateProvider,
        configurationStateHandler.stateProvider
    ),
    ([counterState, configurationState]): Props => {
        return {
            value: counterState.value,
            clicked: counterState.clicked,
            min: configurationState.minCount,
            max: configurationState.maxCount,
            onIncrement: (clicked: Date) => counterStateHandler.dispatchIncrement(clicked),
            onIncrementAsync: (clicked: Date) => counterStateHandler.incrementAsync(clicked),
            onDecrement: (clicked: Date) => counterStateHandler.dispatchDecrement(clicked)
        };
    }
)(Counter);