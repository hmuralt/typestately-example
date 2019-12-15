import { withStateToProps } from "typestately";
import storeContexts from "stores/StoreContexts";
import LoadingInfo, { Props } from "./LoadingInfo";
import loadingInfoStateHandler from "./state/LoadingInfoStateHandler";

loadingInfoStateHandler.attachTo(storeContexts.ClassesExample.hub);

export default withStateToProps(
  loadingInfoStateHandler,
  (state): Props => {
    return {
      updatingCount: state.updatingCount
    };
  }
)(LoadingInfo);
