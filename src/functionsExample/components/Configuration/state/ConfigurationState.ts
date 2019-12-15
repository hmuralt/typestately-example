export default interface ConfigurationState {
  minCount: number;
  maxCount: number;
}

export const defaultConfigurationState: ConfigurationState = {
  minCount: 0,
  maxCount: 20
};
