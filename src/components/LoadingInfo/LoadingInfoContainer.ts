import { withStateToProps } from "typestately";
import LoadingInfo, { Props } from "./LoadingInfo"
import loadingInfoStateHandler from "./State/LoadingInfoStateHandler";

export default withStateToProps(
    loadingInfoStateHandler.stateProvider,
    (state): Props => {
        return {
            updatingCount: state.updatingCount
        }
    }
)(LoadingInfo);