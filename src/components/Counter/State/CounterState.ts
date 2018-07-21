export default interface State {
    value: number;
    clicked: Date;
}

export const defaultState: State = {
    value: 0,
    clicked: new Date()
};