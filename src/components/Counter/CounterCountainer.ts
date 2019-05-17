import { combineLatest } from "rxjs";
import { withStateToProps } from "typestately";
import ConfigurationState from "states/Configuration/ConfigurationState";
import configurationStateHandler from "states/Configuration/ConfigurationStateHandler";
import withLoader from "components/Loader/WithLoader";
import Counter, { Props } from "./Counter";
import CounterState from "./State/CounterState";
import counterStateHandler from "./State/CounterStateHandler";
import storeContexts from "stores/StoreContexts";

counterStateHandler.attachTo(storeContexts.Main.hub);

const counterContainer = withStateToProps(
  [counterStateHandler.state, configurationStateHandler.state] as [CounterState, ConfigurationState],
  combineLatest(counterStateHandler.state$, configurationStateHandler.state$),
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
