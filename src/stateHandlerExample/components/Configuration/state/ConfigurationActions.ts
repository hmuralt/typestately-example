import { Action } from "redux";

export enum ActionType {
  UpdateConfiguration = "UPDATE_CONFIGURATION"
}

export interface UpdateAction<TConfiguration extends {}> extends Action<ActionType> {
  type: ActionType;
  configuration: Partial<TConfiguration>;
}
