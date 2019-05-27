import { createExtensibleReducer } from "typestately";
import { ActionType, SetStatusAction } from "./LoaderActions";
import State from "./LoaderState";

function setStatus(state: State, action: SetStatusAction) {
  const newSTate = {
    ...state,
    status: action.status
  };

  return newSTate;
}

const reducer = createExtensibleReducer<State, ActionType>().handling(ActionType.SetStatus, setStatus);

export default reducer;
