import Typography from "@mui/material/Typography";
import WaterIcon from "@mui/icons-material/Water";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import helperFunction from "../../Functions/helper";
import Grid from "@mui/material/Grid";
import { CurrentWeather } from "../../Interfaces/Interface";
import "./WeatherAddon.css";

interface Props {
  currentWeather: CurrentWeather;
}

const WeatherAddon: React.FC<Props> = ({ currentWeather }) => {
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
    <Grid container spacing={2}>
      {WeatherDetails.map((weatherData) => (
        <Grid item xs={6} md={6}>
          <Grid container direction="row">
            {weatherData.icon}
            <Typography color="#FFFFFFDE" sx={{ marginLeft: 1 }}>
              {weatherData.labelName}
            </Typography>
          </Grid>
          <Typography
            variant="h6"
            color="aliceblue"
            sx={{ marginLeft: 4, fontWeight: "bold" }}
          >
            {weatherData.value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default WeatherAddon;
