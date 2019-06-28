import { Hub, createStateDefinition } from "typestately";
import reducer from "./LoadingInfoReducer";
import { defaultState } from "./LoadingInfoState";

const stateDefinition = createStateDefinition("loadingInfo", defaultState).setReducer(reducer, reducer.routingOptions);

export function createLoadingInfoCore(hub: Hub) {
  const stateContext = stateDefinition.attachTo(hub);

  return {
    state: stateContext.state,
    state$: stateContext.state$
  };
}
