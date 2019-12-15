import { StateHandler } from "typestately";
import { Status } from "classesExample/components/Loader/state/Status";
import { ActionType, SetStatusAction } from "classesExample/components/Loader/state/LoaderActions";
import State, { defaultState } from "./LoadingInfoState";

class LoadingInfoStateHandler extends StateHandler<State, ActionType> {
  constructor() {
    super("loadingInfo", defaultState);
  }

  @StateHandler.reducer<State, ActionType>(ActionType.SetStatus, { isForOtherInstances: true })
  protected updateCount(state: State, action: SetStatusAction) {
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
}

const loadingInfoStateHandler = new LoadingInfoStateHandler();

export default loadingInfoStateHandler;
