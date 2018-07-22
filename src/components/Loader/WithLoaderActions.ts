import { Action as ReduxAction } from "redux";
import { Status } from "./Loader";

export enum ActionType {
    SetStatus = "SetStatus"
}

export interface SetStatusAction  extends ReduxAction<ActionType> {
    type: ActionType;
    status: Status;
}