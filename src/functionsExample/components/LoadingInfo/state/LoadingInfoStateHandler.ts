import { Hub, defineState } from "typestately";
import loadingInfoReducer from "./LoadingInfoReducer";
import { defaultLoadingInfoState } from "./LoadingInfoState";

const loadingInfoStateDefinition = defineState(defaultLoadingInfoState)
  .makeStorableUsingKey("loadingInfo")
  .setReducer(() => loadingInfoReducer);

export function createLoadingInfoStateHandler(hub: Hub) {
  return loadingInfoStateDefinition.createStateHandler(hub);
}
