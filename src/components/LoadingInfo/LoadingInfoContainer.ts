import { withStateToProps } from "typestately";
import LoadingInfo, { Props } from "./LoadingInfo";
import loadingInfoStateHandler from "./State/LoadingInfoStateHandler";
import storeContexts from "stores/StoreContexts";

loadingInfoStateHandler.attachTo(storeContexts.Main.hub);

export default withStateToProps(
  loadingInfoStateHandler.state,
  loadingInfoStateHandler.state$,
  (state): Props => {
    return {
      updatingCount: state.updatingCount
    };
  }
)(LoadingInfo);
