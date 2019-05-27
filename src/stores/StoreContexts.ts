import { setupMainStoreContext } from "./StoreContextSetups";

const storeContexts = {
  StateContextExample: setupMainStoreContext(),
  StateHandlerExample: setupMainStoreContext()
};

export default storeContexts;
