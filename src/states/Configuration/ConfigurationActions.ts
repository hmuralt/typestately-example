import { Action as ReduxAction } from "redux";

export enum ActionType {
    UpdateConfiguration = "UPDATE_CONFIGURATION",
}

export interface UpdateAction<TConfiguration extends {}> extends ReduxAction<ActionType> {
    type: ActionType;
    configuration: Partial<TConfiguration>;
}