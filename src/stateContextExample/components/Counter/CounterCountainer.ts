import { withStateToProps, combine } from "typestately";
import { configurationCore } from "stateContextExample/components/Configuration/business/ConfigurationCore";
import withLoader from "stateContextExample/components/Loader/WithLoader";
import Counter, { Props } from "./Counter";
import { createCounterCore } from "./business/CounterCore";
import storeContexts from "stores/StoreContexts";

const counterCore = createCounterCore(storeContexts.StateContextExample.hub);

const counterContainer = withStateToProps(
  combine(counterCore, configurationCore),
  ([counterState, configurationState]): Props => {
    return {
      value: counterState.value,
      clicked: counterState.clicked,
      min: configurationState.minCount,
      max: configurationState.maxCount,
      onIncrement: counterCore.increment,
      onIncrementAsync: counterCore.incrementAsync,
      onDecrement: counterCore.decrement
    };
  }
)(Counter);

const counterContainerWithLoader = withLoader(counterCore.loaderCore)(counterContainer);

export default counterContainerWithLoader;
