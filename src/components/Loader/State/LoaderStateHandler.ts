
import { DecoratedStateHandler, StateHandler, Reducer } from "typestately";
import { ActionType, SetStatusAction } from "./LoaderActions";
import State, { defaultState } from "./LoaderState";
import Status from "./Status";

@DecoratedStateHandler
export default class LoaderStateHandler extends StateHandler<State, ActionType> {
    constructor() {
        super("loader", defaultState);
    }

    public dispatchSetStatusAction(status: Status) {
        this.dispatch<SetStatusAction>({
            type: ActionType.SetStatus,
            status
        }, this.instanceId);
    }

    @Reducer(ActionType.SetStatus)
    protected setStatus(state: State, action: SetStatusAction) {
        return {
            ...state,
            status: action.status
        };
    }
}