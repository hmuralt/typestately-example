import { Hub, createStateDefinition } from "typestately";
import reducer from "./LoadingInfoReducer";
import { defaultState } from "./LoadingInfoState";

export function createLoadingInfoCore(hub: Hub) {
  const stateContext = createStateDefinition("loadingInfo", defaultState)
    .setReducer(reducer, reducer.routingOptions)
    .attachTo(hub);

  return {
    state: stateContext.state,
    state$: stateContext.state$
  };
}
