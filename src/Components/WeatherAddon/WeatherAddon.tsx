import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import helperFunction from "../../Functions/helper";
import "./WeatherAddon.css";

interface Props {
  day: number;
  sunrise: number;
  sunset: number;
  clouds: number;
  precipitation: number;
}

const WeatherAddon: React.FC<Props> = ({
  day,
  sunrise,
  sunset,
  clouds,
  precipitation,
}) => {
  return (
    <div className="daily-additional-block">
      <div className="daily-additional-block-left">
        <Typography variant="h3" sx={{ marginTop: 5 }}>
          {helperFunction.getDay(day)}
        </Typography>
      </div>
      <div className="daily-additional-block-right">
        <div className="wd-details-topright-left">
          <div className="wd-details-topright-cont">
            <div className="weather-details-icon">
              <WbSunnyIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Sunrise</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, marginBottom: 1, fontWeight: "bold" }}
            >
              {helperFunction.getTime(sunrise)}
            </Typography>
          </div>
          <div>
            <div className="weather-details-icon">
              <NightlightIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Sunset</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, fontWeight: "bold" }}
            >
              {helperFunction.getTime(sunset)}
            </Typography>
          </div>
        </div>
        <div>
          <div>
            <div className="weather-details-icon">
              <CloudIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Clouds</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, marginBottom: 1, fontWeight: "bold" }}
            >
              {clouds}%
            </Typography>
          </div>
          <div>
            <div className="weather-details-icon">
              <UmbrellaIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Precipitation</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, fontWeight: "bold" }}
            >
              {Math.round(precipitation * 100)}%
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAddon;
