import { createExtensibleReducer } from "typestately";
import { ChangeAction, ActionType } from "./CounterActions";
import State from "./CounterState";

function increment(state: State, action: ChangeAction) {
  return {
    value: state.value + 1,
    clicked: action.clicked
  };
}

function decrement(state: State, action: ChangeAction) {
  return {
    value: state.value - 1,
    clicked: action.clicked
  };
}

const reducer = createExtensibleReducer<State, ActionType>()
  .handling(ActionType.Increment, increment)
  .handling(ActionType.Decrement, decrement);

export default reducer;
