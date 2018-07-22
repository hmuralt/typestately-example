
import { DecoratedStateHandler, StateHandler, Reducer } from "typestately";
import { Status } from "./Loader";
import { ActionType, SetStatusAction } from "./WithLoaderActions";

export interface State {
    status: Status;
}

export const defaultState: State = {
    status: Status.Done
};

@DecoratedStateHandler
export default class WithLoaderStateHandler extends StateHandler<State, ActionType> {
    constructor() {
        super("withLoader", defaultState);
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