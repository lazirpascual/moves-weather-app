import Typography from "@mui/material/Typography";
import WaterIcon from "@mui/icons-material/Water";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import WeatherItem from "../WeatherItem/WeatherItem";
import Grid from "@mui/material/Grid";
import { CurrentWeather } from "../../Interfaces/Interface";
import helperFunction from "../../Functions/helper";
import "./CurrentWeatherBlock.css";

interface Props {
  currentWeather: CurrentWeather;
}

const CurrentWeatherBlock: React.FC<Props> = ({ currentWeather }) => {
  const iconSrc = `https://openweathermap.org/img/w/${currentWeather.icon}.png`;

  const WeatherDetails = [
    {
      icon: <WaterIcon />,
      labelName: "Humidity",
      value: `${currentWeather.humidity}%`,
    },
    {
      icon: <CompressIcon />,
      labelName: "Air Pressure",
      value: `${currentWeather.pressure} hPa`,
    },
    {
      icon: <ThermostatIcon />,
      labelName: "Feels Like",
      value: `${Math.round(currentWeather.feels_like)}°C`,
    },
    {
      icon: <AirIcon />,
      labelName: "Wind Speed",
      value: `${(currentWeather.wind_speed * 3.6).toFixed(2)} km/h`,
    },
    {
      icon: <WbSunnyIcon />,
      labelName: "Sunrise",
      value: helperFunction.getTime(currentWeather.sunrise),
    },
    {
      icon: <NightlightIcon />,
      labelName: "Sunset",
      value: helperFunction.getTime(currentWeather.sunset),
    },
    {
      icon: <CloudIcon />,
      labelName: "Clouds",
      value: `${currentWeather.clouds}%`,
    },
    {
      icon: <UmbrellaIcon />,
      labelName: "Precipitation",
      value: `${Math.round(currentWeather.pop * 100)}%`,
    },
  ];

  return (
    <Grid container className="weather-details" direction="column">
      <Grid item className="weather-details-left">
        <Grid container direction="row">
          <img src={iconSrc} height="70px" width="70px" alt="WeatherIcon" />
          <Typography variant="h3" color="aliceblue" sx={{ marginLeft: 3 }}>
            {Math.round(currentWeather.current_temp)}°C
          </Typography>
        </Grid>
        <Typography variant="body1" sx={{ marginBottom: 3, marginLeft: 3 }}>
          {currentWeather.desc}
        </Typography>
        <Typography variant="h4" color="aliceblue">
          {currentWeather.city}, {currentWeather.country}
        </Typography>
        <Typography variant="h3" sx={{ marginTop: 4 }}>
          {helperFunction.getDay(currentWeather.dt)}
        </Typography>
      </Grid>
      <Grid item className="weather-details-right">
        <Grid container spacing={2}>
          {WeatherDetails.map((weatherData, index) => (
            <WeatherItem
              key={index}
              icon={weatherData.icon}
              labelName={weatherData.labelName}
              value={weatherData.value}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CurrentWeatherBlock;
