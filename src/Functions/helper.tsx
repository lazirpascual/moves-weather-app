const getDay = (currentDateTime: number) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(currentDateTime * 1000);
  return days[date.getDay()];
};

const getDate = (currentDateTime: number) => {
  const date = new Date(currentDateTime * 1000);
  return date.toLocaleDateString();
};

const getTime = (dateTime: number) => {
  const currentSunrise = new Date(dateTime * 1000);
  return currentSunrise.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const helperFunction = { getDay, getDate, getTime };

export default helperFunction;
