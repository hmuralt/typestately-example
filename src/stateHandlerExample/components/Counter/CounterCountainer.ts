import { withStateToProps, combine } from "typestately";
import storeContexts from "stores/StoreContexts";
import configurationStateHandler from "stateHandlerExample/components/Configuration/state/ConfigurationStateHandler";
import withLoader from "stateHandlerExample/components/Loader/WithLoader";
import Counter, { Props } from "./Counter";
import counterStateHandler from "./state/CounterStateHandler";

counterStateHandler.attachTo(storeContexts.StateHandlerExample.hub);

const counterContainer = withStateToProps(
  combine(counterStateHandler, configurationStateHandler),
  ([counterState, configurationState]): Props => {
    return {
      value: counterState.value,
      clicked: counterState.clicked,
      min: configurationState.minCount,
      max: configurationState.maxCount,
      onIncrement: (clicked: Date) => counterStateHandler.increment(clicked),
      onIncrementAsync: (clicked: Date) => counterStateHandler.incrementAsync(clicked),
      onDecrement: (clicked: Date) => counterStateHandler.decrement(clicked)
    };
  }
)(Counter);

const counterContainerWithLoader = withLoader(counterStateHandler.loaderStateHandler)(counterContainer);

export default counterContainerWithLoader;
