import { Action } from "redux";

export enum ActionType {
  Increment = "INCREMENT",
  Decrement = "DECREMENT"
}

export interface ChangeAction extends Action<ActionType> {
  type: ActionType;
  clicked: Date;
}
