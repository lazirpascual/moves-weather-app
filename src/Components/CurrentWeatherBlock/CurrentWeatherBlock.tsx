import Typography from "@mui/material/Typography";
import WaterIcon from "@mui/icons-material/Water";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import DailyAddon from "../DailyAddon/DailyAddon";
import { CurrentWeather } from "../../Interfaces/Interface";
import "./CurrentWeatherBlock.css";

interface Props {
  currentWeather: CurrentWeather;
}

const CurrentWeatherBlock: React.FC<Props> = ({ currentWeather }) => {
  const iconSrc = `https://openweathermap.org/img/w/${currentWeather.icon}.png`;

  return (
    <div className="weather-details">
      <div className="weather-details-top">
        <div className="weather-details-topleft">
          <div className="weather-details-icon">
            <img src={iconSrc} height="60px" width="60px" alt="WeatherIcon" />
            <Typography variant="h3" color="aliceblue" sx={{ marginLeft: 3 }}>
              {Math.round(currentWeather.current_temp)}°C
            </Typography>
          </div>
          <Typography sx={{ marginLeft: 11 }}>snow and rain</Typography>
          <Typography variant="h4" color="aliceblue">
            {currentWeather.city}, {currentWeather.country}
          </Typography>
        </div>
        <div className="weather-details-topright">
          <div className="wd-details-topright-left">
            <div className="weather-details-icon">
              <WaterIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Humidity</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, fontWeight: "bold" }}
            >
              {currentWeather.humidity}%
            </Typography>
            <div className="weather-details-icon">
              <CompressIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Air Pressure</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, fontWeight: "bold" }}
            >
              {currentWeather.pressure} hPa
            </Typography>
          </div>
          <div>
            <div className="weather-details-icon">
              <ThermostatIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Feels Like</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, fontWeight: "bold" }}
            >
              {Math.round(currentWeather.feels_like)}°C
            </Typography>
            <div className="weather-details-icon">
              <AirIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Wind Speed</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, fontWeight: "bold" }}
            >
              {currentWeather.wind_speed} MPH
            </Typography>
          </div>
        </div>
      </div>
      <div className="weather-details-bottom">
        <DailyAddon
          day={currentWeather.dt}
          sunrise={currentWeather.sunrise}
          sunset={currentWeather.sunset}
          clouds={currentWeather.clouds}
          precipitation={currentWeather.pop}
        />
      </div>
    </div>
  );
};

export default CurrentWeatherBlock;
