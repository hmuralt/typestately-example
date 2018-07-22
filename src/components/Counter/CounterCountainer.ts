import { WithStateToProps } from "typestately";
import { compose } from "recompose";
import { combine } from "typestately/dist/StateProvider";
import configurationStateHandler from "states/Configuration/ConfigurationStateHandler";
import withLoader from "components/Loader/WithLoader";
import Counter, { Props } from "./Counter"
import counterStateHandler from "./State/CounterStateHandler";

export default compose(
    withLoader(counterStateHandler.withLoaderStateHandler),
    WithStateToProps(
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
    )
)(Counter);