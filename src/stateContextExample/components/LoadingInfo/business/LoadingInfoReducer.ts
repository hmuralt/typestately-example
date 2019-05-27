import { createExtensibleReducer } from "typestately";
import { Status } from "stateContextExample/components/Loader/business/Status";
import { ActionType, SetStatusAction } from "stateContextExample/components/Loader/business/LoaderActions";
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

const reducer = createExtensibleReducer<State, ActionType>().handling(ActionType.SetStatus, updateCount, {
  isForOtherInstances: true
});

export default reducer;
