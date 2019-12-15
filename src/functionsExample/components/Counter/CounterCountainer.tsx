import { compose } from "redux";
import React, { useContext } from "react";
import { useStateProvider } from "typestately";
import { configurationStateHandlerContext } from "../Configuration/state/ConfigurationStateHandler";
import withLoader from "../Loader/WithLoader";
import withPropsProvider from "../WithPropsProvider/WithPropsProvider";
import { CounterStateHandler, createCounterStateHandler } from "./state/CounterStateHandler";
import storeContexts from "stores/StoreContexts";
import Counter from "./Counter";

const CounterContainer: React.FC<{ counterStateHandler: CounterStateHandler }> = ({ counterStateHandler }) => {
  const counterState = useStateProvider(counterStateHandler);
  const configurationState = useStateProvider(useContext(configurationStateHandlerContext));

  return (
    <Counter
      value={counterState.value}
      clicked={counterState.clicked}
      min={configurationState.minCount}
      max={configurationState.maxCount}
      onIncrement={counterStateHandler.increment}
      onIncrementAsync={counterStateHandler.incrementAsync}
      onDecrement={counterStateHandler.decrement}
    />
  );
};

const LoadingCounterContainer = compose<React.FC>(
  withPropsProvider(() => {
    const counterStateHandler = React.useMemo(() => createCounterStateHandler(storeContexts.FunctionsExample.hub), []);
    return {
      counterStateHandler,
      loaderStateProvider: counterStateHandler.loaderStateProvider
    };
  }),
  withLoader()
)(CounterContainer);

export default LoadingCounterContainer;
