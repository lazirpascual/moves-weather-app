interface CurrentWeather {
  desc: string;
  city: string;
  country: string;
  humidity: number;
  pressure: number;
  feels_like: number;
  wind_speed: number;
  icon: string;
  lat?: string;
  lon?: string;
  dt: number;
  current_temp: number;
  min_temp: number;
  max_temp: number;
  sunrise: number;
  sunset: number;
  clouds: number;
  pop: number;
}

export { CurrentWeather };
