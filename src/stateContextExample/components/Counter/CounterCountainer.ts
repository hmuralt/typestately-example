import { combineLatest } from "rxjs";
import { withStateToProps } from "typestately";
import ConfigurationState from "stateContextExample/components/Configuration/business/ConfigurationState";
import { configurationCore } from "stateContextExample/components/Configuration/business/ConfigurationCore";
import withLoader from "stateContextExample/components/Loader/WithLoader";
import Counter, { Props } from "./Counter";
import CounterState from "./business/CounterState";
import { createCounterCore } from "./business/CounterCore";
import storeContexts from "stores/StoreContexts";

const counterCore = createCounterCore(storeContexts.StateContextExample.hub);

const counterContainer = withStateToProps(
  {
    state: [counterCore.state, configurationCore.state] as [CounterState, ConfigurationState],
    state$: combineLatest(counterCore.state$, configurationCore.state$)
  },
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
