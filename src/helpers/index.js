export const getCurrentTime = () => {
  const time = new Date();
  let minutes = time.getMinutes();
  minutes = minutes >= 10 ? minutes : `0${minutes}`;
  let hours = time.getHours();
  hours = hours >= 10 ? hours : `0${hours}`;
  return `${hours}:${minutes}`;
};

export const formatPostDate = (date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthIndex = date.slice(6, 7) - 1;
  const month = months[monthIndex];
  const day = date.slice(8, 10);
  const time = date.slice(11, 16);
  return `${month} ${day}, ${time}`;
};
