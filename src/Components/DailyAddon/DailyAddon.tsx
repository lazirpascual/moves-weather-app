import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import "./DailyAddon.css";

interface Props {
  day: number;
  sunrise: number;
  sunset: number;
  clouds: number;
  precipitation: number;
}

const DailyAddon: React.FC<Props> = ({
  day,
  sunrise,
  sunset,
  clouds,
  precipitation,
}) => {
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

  const getSunrise = () => {
    const currentSunrise = new Date(sunrise * 1000);
    return currentSunrise.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const getSunset = () => {
    const currentSunset = new Date(sunset * 1000);
    return currentSunset.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="daily-additional-block">
      <div className="daily-additional-block-left">
        <Typography variant="h3" sx={{ marginTop: 2.5 }}>
          {getDay(day)}
        </Typography>
      </div>
      <div className="daily-additional-block-right">
        <div className="wd-details-topright-left">
          <div>
            <div className="weather-details-icon">
              <WbSunnyIcon sx={{ marginRight: 1 }} />
              <Typography color="#FFFFFFDE">Sunrise</Typography>
            </div>
            <Typography
              variant="h6"
              color="aliceblue"
              sx={{ marginLeft: 4, fontWeight: "bold" }}
            >
              {getSunrise()}
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
              {getSunset()}
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
              sx={{ marginLeft: 4, fontWeight: "bold" }}
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

export default DailyAddon;
