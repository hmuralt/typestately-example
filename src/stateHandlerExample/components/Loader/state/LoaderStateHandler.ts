import { StateHandler } from "typestately";
import { ActionType, SetStatusAction } from "./LoaderActions";
import State, { defaultState } from "./LoaderState";
import Status from "./Status";

export default class LoaderStateHandler extends StateHandler<State, ActionType> {
  constructor() {
    super("loader", defaultState);
  }

  public setStatus(status: Status) {
    this.dispatch<SetStatusAction>(
      {
        type: ActionType.SetStatus,
        status
      },
      true
    );
  }

  @StateHandler.reducer<State, ActionType>(ActionType.SetStatus)
  protected reduceSetStatus(state: State, action: SetStatusAction) {
    return {
      ...state,
      status: action.status
    };
  }
}
