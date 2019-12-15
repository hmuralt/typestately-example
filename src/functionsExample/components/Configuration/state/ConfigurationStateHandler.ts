import React from "react";
import { defineState, Dispatch, Hub } from "typestately";
import ConfigurationState, { defaultConfigurationState } from "./ConfigurationState";
import { ActionType, UpdateAction } from "./ConfigurationActions";
import configurationReducer from "./ConfigurationReducer";

const configurationStateDefinition = defineState(defaultConfigurationState)
  .makeStorableUsingKey("configuration")
  .setActionDispatchers({
    updateConfiguration(dispatch: Dispatch<ActionType>, configuration: Partial<ConfigurationState>) {
      dispatch<UpdateAction<ConfigurationState>>({
        type: ActionType.UpdateConfiguration,
        configuration
      });
    }
  })
  .setReducer(() => configurationReducer);

export function createConfigurationStateHandler(hub: Hub) {
  return configurationStateDefinition.createStateHandler(hub);
}

export const configurationStateHandlerContext = React.createContext<ReturnType<typeof createConfigurationStateHandler>>(
  {} as any
);
