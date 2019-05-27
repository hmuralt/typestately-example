import { createStore } from "redux";
import { createStoreContext } from "typestately";

export function setupMainStoreContext() {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  const store = createStore((state) => state || {}, devToolsExtension && devToolsExtension());

  return createStoreContext(store, {});
}
