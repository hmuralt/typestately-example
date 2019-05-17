import { createStore } from "redux";
import { createStoreContext } from "typestately";

export function setupMainStoreContext() {
  const store = createStore((state) => state || {});

  return createStoreContext(store, {});
}
