import Status from "./Status";

export default interface LoaderState {
  status: Status;
}

export const defaultLoaderState: LoaderState = {
  status: Status.Done
};
