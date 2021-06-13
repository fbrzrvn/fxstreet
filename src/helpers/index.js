export const getCurrentTime = () => {
  const time = new Date();
  let minutes = time.getMinutes();
  minutes = minutes > 10 ? minutes : `0${minutes}`;
  let hours = time.getHours();
  hours = hours > 10 ? hours : `0${hours}`;
  return `${hours}:${minutes}`;
};
