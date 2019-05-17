import Status from "./Status";

export default interface State {
  status: Status;
}

export const defaultState: State = {
  status: Status.Done
};
