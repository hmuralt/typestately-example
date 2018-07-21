import { Action as ReduxAction } from "redux";

export enum ActionType {
    Increment = "INCREMENT",
    Decrement = "DECREMENT"
}

export interface ChangeAction extends ReduxAction<ActionType> {
    type: ActionType;
    clicked: Date;
}