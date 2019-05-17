import { StateHandler } from "typestately";
import { UpdateAction, ActionType } from "./ConfigurationActions";
import State, { defaultState } from "./ConfigurationState";
import storeContexts from "stores/StoreContexts";

class ConfigurationStateHandler extends StateHandler<State, ActionType> {
  constructor() {
    super("configuration", defaultState);
  }

  public update(configuration: Partial<State>) {
    this.dispatch<UpdateAction<State>>({
      type: ActionType.UpdateConfiguration,
      configuration
    });
  }

  @StateHandler.reducer<State, ActionType>(ActionType.UpdateConfiguration)
  protected reduceUpdate(state: State, action: UpdateAction<State>) {
    return {
      ...state,
      ...action.configuration
    };
  }
}

const configurationStateHandler = new ConfigurationStateHandler();
configurationStateHandler.attachTo(storeContexts.Main.hub);
export default configurationStateHandler;
