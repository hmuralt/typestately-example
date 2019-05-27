import { StateHandler } from "typestately";
import Status from "stateHandlerExample/components/Loader/state/Status";
import LoaderStateHandler from "stateHandlerExample/components/Loader/state/LoaderStateHandler";
import { ChangeAction, ActionType } from "./CounterActions";
import State, { defaultState } from "./CounterState";

class CounterStateHandler extends StateHandler<State, ActionType> {
  // Ideally injected...
  @StateHandler.nested
  public readonly loaderStateHandler: LoaderStateHandler;

  constructor(loaderStateHandler: LoaderStateHandler) {
    super("counter", defaultState);

    this.loaderStateHandler = loaderStateHandler;
  }

  public increment(clicked: Date) {
    this.dispatch<ChangeAction>({
      type: ActionType.Increment,
      clicked
    });
  }

  public decrement(clicked: Date) {
    this.dispatch<ChangeAction>({
      type: ActionType.Decrement,
      clicked
    });
  }

  public incrementAsync(clicked: Date) {
    this.loaderStateHandler.setStatus(Status.Updating);
    window.setTimeout(() => {
      this.increment(clicked);
      this.loaderStateHandler.setStatus(Status.Done);
    }, 2000);
  }

  @StateHandler.reducer<State, ActionType>(ActionType.Increment)
  protected reduceIncrement(state: State, action: ChangeAction) {
    return {
      value: state.value + 1,
      clicked: action.clicked
    };
  }

  @StateHandler.reducer<State, ActionType>(ActionType.Decrement)
  protected reduceDecrement(state: State, action: ChangeAction) {
    return {
      value: state.value - 1,
      clicked: action.clicked
    };
  }
}

const counterStateHandler = new CounterStateHandler(new LoaderStateHandler());

export default counterStateHandler;
