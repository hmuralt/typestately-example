import { defineState, Dispatch, Hub } from "typestately";
import { defaultLoaderState } from "./LoaderState";
import loaderReducer from "./LoaderReducer";
import { ActionType, SetStatusAction } from "./LoaderActions";
import Status from "./Status";

const loaderStateDefinition = defineState(defaultLoaderState)
  .makeStorableUsingKey("loader")
  .setActionDispatchers({
    setStatus(dispatch: Dispatch<ActionType>, status: Status) {
      dispatch<SetStatusAction>(
        {
          type: ActionType.SetStatus,
          status
        },
        true
      );
    }
  })
  .setReducer(() => loaderReducer);

export function createLoaderStateHandler(hub: Hub, parentContextId: string) {
  return loaderStateDefinition.createStateHandler(hub, parentContextId);
}
