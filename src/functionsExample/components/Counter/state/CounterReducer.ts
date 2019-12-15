import { createExtensibleReducer } from "typestately";
import { ChangeAction, ActionType } from "./CounterActions";
import CounterState from "./CounterState";

function increment(state: CounterState, action: ChangeAction) {
  return {
    value: state.value + 1,
    clicked: action.clicked
  };
}

function decrement(state: CounterState, action: ChangeAction) {
  return {
    value: state.value - 1,
    clicked: action.clicked
  };
}

const counterReducer = createExtensibleReducer<CounterState, ActionType>()
  .handling(ActionType.Increment, increment)
  .handling(ActionType.Decrement, decrement);

export default counterReducer;
