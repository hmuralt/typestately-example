import { Hub, createStateDefinition } from "typestately";
import { createLoaderCore } from "stateContextExample/components/Loader/business/LoaderCore";
import Status from "stateContextExample/components/Loader/business/Status";
import { defaultState } from "./CounterState";
import { ActionType } from "./CounterActions";
import reducer from "./CounterReducer";

const stateDefinition = createStateDefinition("counter", defaultState).setReducer(reducer);

export function createCounterCore(hub: Hub) {
  const stateContext = stateDefinition.attachTo(hub);
  const loaderCore = createLoaderCore(hub, stateContext.id);

  function increment(clicked: Date) {
    stateContext.dispatch({
      type: ActionType.Increment,
      clicked
    });
  }

  function incrementAsync(clicked: Date) {
    loaderCore.setStatus(Status.Updating);

    window.setTimeout(() => {
      increment(clicked);
      loaderCore.setStatus(Status.Done);
    }, 2000);
  }

  function decrement(clicked: Date) {
    stateContext.dispatch({
      type: ActionType.Decrement,
      clicked
    });
  }

  return {
    state: stateContext.state,
    state$: stateContext.state$,
    loaderCore,
    increment,
    incrementAsync,
    decrement
  };
}
