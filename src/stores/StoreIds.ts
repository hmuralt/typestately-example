import { setupMainStore } from "./StoreSetups";

const storeIds = {
    Main: setupMainStore()
};
// tslint:disable-next-line:no-console
console.log(storeIds);
export default storeIds;