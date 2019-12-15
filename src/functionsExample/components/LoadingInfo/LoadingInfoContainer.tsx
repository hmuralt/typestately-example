import React from "react";
import { useStateProvider } from "typestately";
import storeContexts from "stores/StoreContexts";
import LoadingInfo from "./LoadingInfo";
import { createLoadingInfoStateHandler } from "./state/LoadingInfoStateHandler";

const loadingInfoStateHandler = createLoadingInfoStateHandler(storeContexts.FunctionsExample.hub);

const LoadingInfoContainer: React.FC = () => {
  const loadingInfoState = useStateProvider(loadingInfoStateHandler);

  return <LoadingInfo updatingCount={loadingInfoState.updatingCount} />;
};

export default LoadingInfoContainer;
