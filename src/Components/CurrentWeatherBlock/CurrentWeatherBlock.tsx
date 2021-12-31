import Typography from "@mui/material/Typography";
import WaterIcon from "@mui/icons-material/Water";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WeatherAddon from "../WeatherAddon/WeatherAddon";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import Grid from "@mui/material/Grid";
import { CurrentWeather } from "../../Interfaces/Interface";
import helperFunction from "../../Functions/helper";
import "./CurrentWeatherBlock.css";

interface Props {
  currentWeather: CurrentWeather;
}

const CurrentWeatherBlock: React.FC<Props> = ({ currentWeather }) => {
  const iconSrc = `https://openweathermap.org/img/w/${currentWeather.icon}.png`;

  return (
    <Grid container className="weather-details">
      <Grid item className="weather-details-left">
        <Grid container direction="row">
          <img src={iconSrc} height="70px" width="70px" alt="WeatherIcon" />
          <Typography variant="h3" color="aliceblue" sx={{ marginLeft: 3 }}>
            {Math.round(currentWeather.current_temp)}°C{" "}
          </Typography>
        </Grid>
        <Typography variant="body1" sx={{ marginBottom: 3, marginLeft: 3 }}>
          {currentWeather.desc}
        </Typography>
        <Typography variant="h4" color="aliceblue">
          {currentWeather.city}, {currentWeather.country}{" "}
        </Typography>
        <Typography variant="h3" sx={{ marginTop: 4 }}>
          {helperFunction.getDay(currentWeather.dt)}
        </Typography>
      </Grid>
      <Grid item className="weather-details-right">
        <WeatherAddon currentWeather={currentWeather} />
      </Grid>
    </Grid>
  );
};

export default CurrentWeatherBlock;
