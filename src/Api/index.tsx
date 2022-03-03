import axios from "axios";

export const fetchCurrentData = async (query: string) => {
  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

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

export const fetchOneCallData = async (
  lat: string,
  lon: string,
  city: string,
  country: string
) => {
  const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const {
    data: { daily },
  } = await axios.get(oneCallUrl);

  const dailyData = daily.map((currentData: any) => {
    return {
      current_temp: currentData.temp.day,
      min_temp: currentData.temp.min,
      max_temp: currentData.temp.max,
      feels_like: currentData.feels_like.day,
      dt: currentData.dt,
      desc: currentData.weather[0].description,
      humidity: currentData.humidity,
      pressure: currentData.pressure,
      wind_speed: currentData.wind_speed,
      icon: currentData.weather[0].icon,
      sunrise: currentData.sunrise,
      sunset: currentData.sunset,
      clouds: currentData.clouds,
      pop: currentData.pop,
      city: city,
      country: country,
    };
  });

  return { dailyData };
};
