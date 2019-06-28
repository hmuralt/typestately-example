import { createStateDefinition, Hub } from "typestately";
import { defaultState } from "./LoaderState";
import { ActionType, SetStatusAction } from "./LoaderActions";
import reducer from "./LoaderReducer";
import Status from "./Status";

const stateDefinition = createStateDefinition("loader", defaultState).setReducer(reducer);

export function createLoaderCore(hub: Hub, parentContextId: string) {
  const stateContext = stateDefinition.attachTo(hub, parentContextId);

  function setStatus(status: Status) {
    stateContext.dispatch<SetStatusAction>(
      {
        type: ActionType.SetStatus,
        status
      },
      true
    );
  }

  return {
    state: stateContext.state,
    state$: stateContext.state$,
    setStatus
  };
}
