import Typography from "@mui/material/Typography";
import WaterIcon from "@mui/icons-material/Water";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import DailyAddon from "../DailyAddon/DailyAddon";
import "./CurrentWeatherBlock.css";

const CurrentWeatherBlock = () => {
  return (
    <div className="weather-details">
      <div className="weather-details-top">
        <div className="weather-details-topleft">
          <div className="weather-details-icon">
            <Typography variant="h3" color="aliceblue" sx={{ marginLeft: 3 }}>
              15°C
            </Typography>
          </div>
          <Typography sx={{ marginLeft: 11 }}>snow and rain</Typography>
          <Typography variant="h4" color="aliceblue">
            Kitchener, CA
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
              69%
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
              1051 hPa
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
              19°C
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
              5.6 MPH
            </Typography>
          </div>
        </div>
      </div>
      <div className="weather-details-bottom">
        <DailyAddon />
      </div>
    </div>
  );
};

export default CurrentWeatherBlock;
