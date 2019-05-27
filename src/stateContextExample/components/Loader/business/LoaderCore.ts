import { createStateDefinition, Hub } from "typestately";
import State, { defaultState } from "./LoaderState";
import { ActionType, SetStatusAction } from "./LoaderActions";
import reducer from "./LoaderReducer";
import Status from "./Status";

export function createLoaderCore(hub: Hub, parentContextId: string) {
  const stateContext = createStateDefinition<State, ActionType>("loader", defaultState)
    .setReducer(reducer)
    .attachTo(hub, parentContextId);

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
