import { Hub, createStateDefinition } from "typestately";
import storeContexts from "stores/StoreContexts";
import State, { defaultState } from "./ConfigurationState";
import { ActionType, UpdateAction } from "./ConfigurationActions";
import reducer from "./ConfigurationReducer";

export function createConfigurationCore(hub: Hub) {
  const stateContext = createStateDefinition<State, ActionType>("configuration", defaultState)
    .setReducer(reducer)
    .attachTo(hub);

  function UpdateConfiguration(configuration: Partial<State>) {
    stateContext.dispatch<UpdateAction<State>>({
      type: ActionType.UpdateConfiguration,
      configuration
    });
  }

  return {
    state: stateContext.state,
    state$: stateContext.state$,
    UpdateConfiguration
  };
}

export const configurationCore = createConfigurationCore(storeContexts.StateContextExample.hub);
