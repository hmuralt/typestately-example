import { defineState, Dispatch, Hub, withStateProvider } from "typestately";
import { createLoaderStateHandler } from "functionsExample/components/Loader/state/LoaderStateHandler";
import { Status } from "classesExample/components/Loader/state/Status";
import { defaultCounterState } from "./CounterState";
import { ActionType, ChangeAction } from "./CounterActions";
import counterReducer from "./CounterReducer";

const actionDipsatchers = {
  increment(dispatch: Dispatch<ActionType>, clicked: Date) {
    dispatch<ChangeAction>({
      type: ActionType.Increment,
      clicked
    });
  },
  decrement(dispatch: Dispatch<ActionType>, clicked: Date) {
    dispatch<ChangeAction>({
      type: ActionType.Decrement,
      clicked
    });
  }
};

const counterStateDefinition = defineState(defaultCounterState)
  .makeStorableUsingKey("counter")
  .setReducer(() => counterReducer)
  .setActionDispatchers(actionDipsatchers);

export function createCounterStateHandler(hub: Hub) {
  const counterStateHandler = counterStateDefinition.createStateHandler(hub);
  const loaderStateHandler = createLoaderStateHandler(hub, counterStateHandler.contextId);
  const extensions = {
    incrementAsync(clicked: Date) {
      loaderStateHandler.setStatus(Status.Updating);

      window.setTimeout(() => {
        counterStateHandler.increment(clicked);

        loaderStateHandler.setStatus(Status.Done);
      }, 2000);
    }
  };

  return Object.assign(counterStateHandler, extensions, {
    loaderStateProvider: withStateProvider(loaderStateHandler)({})
  });
}

export type CounterStateHandler = ReturnType<typeof createCounterStateHandler>;
