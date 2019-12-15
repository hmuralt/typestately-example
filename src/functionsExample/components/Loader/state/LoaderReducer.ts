import { createExtensibleReducer } from "typestately";
import { ActionType, SetStatusAction } from "./LoaderActions";
import State from "./LoaderState";

function setStatus(state: State, action: SetStatusAction) {
  const newState = {
    ...state,
    status: action.status
  };

  return newState;
}

const loaderReducer = createExtensibleReducer<State, ActionType>().handling(ActionType.SetStatus, setStatus);

export default loaderReducer;
