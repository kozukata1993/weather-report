export const generateIcon = (iconText: string) => {
  const i = ['clear-day', 'clear-night', 'rain', 'snow', 'cloudy'].indexOf(iconText);
  return ['sun', 'sun', 'rain', 'snowflake', 'cloud', 'question'][i];
};
