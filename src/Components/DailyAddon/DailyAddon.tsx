import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import "./DailyAddon.css";

const DailyAddon = () => {
  return (
    <div className="daily-additional-block">
      <div className="daily-additional-block-left">
        <Typography variant="h3" sx={{ marginTop: 2.5 }}>
          Thursday
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
              6:53 AM
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
              5:57 PM
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
              100%
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
              87%
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyAddon;
