import { withStateToProps } from "typestately";
import LoadingInfo, { Props } from "./LoadingInfo";
import { createLoadingInfoCore } from "./business/LoadingInfoCore";
import storeContexts from "stores/StoreContexts";

const loadingInfoCore = createLoadingInfoCore(storeContexts.StateContextExample.hub);

export default withStateToProps(
  loadingInfoCore,
  (state): Props => {
    return {
      updatingCount: state.updatingCount
    };
  }
)(LoadingInfo);
