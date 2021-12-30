import axios from "axios";

export const fetchCurrentData = async (query: string) => {
  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=16f50bdf5889306f5580348e7afebac0`;

  const {
    data: { name, sys, coord },
  } = await axios.get(cityUrl);

  const currentWeatherData = {
    lat: coord.lat,
    lon: coord.lon,
    city: name,
    country: sys.country,
  };

  return currentWeatherData;
};
