import { createExtensibleReducer } from "typestately";
import { ActionType, SetStatusAction } from "functionsExample/components/Loader/state/LoaderActions";
import Status from "functionsExample/components/Loader/state/Status";
import State from "./LoadingInfoState";

function updateCount(state: State, action: SetStatusAction) {
  switch (action.status) {
    case Status.Updating:
      return {
        ...state,
        updatingCount: state.updatingCount + 1
      };
    case Status.Done:
      return {
        ...state,
        updatingCount: state.updatingCount - 1
      };
  }

  return state;
}

const loadingInfoReducer = createExtensibleReducer<State, ActionType>().handling(ActionType.SetStatus, updateCount, {
  isForOtherInstances: true
});

export default loadingInfoReducer;
