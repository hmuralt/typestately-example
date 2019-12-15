import { createExtensibleReducer } from "typestately";
import { UpdateAction, ActionType } from "./ConfigurationActions";
import State from "./ConfigurationState";

function updateConfiguration(state: State, action: UpdateAction<State>) {
  return {
    ...state,
    ...action.configuration
  };
}

const configurationReducer = createExtensibleReducer<State, ActionType>().handling(
  ActionType.UpdateConfiguration,
  updateConfiguration
);

export default configurationReducer;
