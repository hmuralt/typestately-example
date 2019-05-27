import { Action } from "redux";
import Status from "./Status";

export enum ActionType {
  SetStatus = "SET_STATUS"
}

export interface SetStatusAction extends Action<ActionType> {
  type: ActionType;
  status: Status;
}
