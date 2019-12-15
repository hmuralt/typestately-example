export default interface CounterState {
  value: number;
  clicked: Date;
}

export const defaultCounterState: CounterState = {
  value: 0,
  clicked: new Date()
};
