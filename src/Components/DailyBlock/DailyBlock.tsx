import Typography from "@mui/material/Typography";

interface Props {
  date: string;
  day: string;
  icon: string;
  minTemp: number;
  maxTemp: number;
}

const DailyBlock: React.FC<Props> = ({ date, day, icon, minTemp, maxTemp }) => {
  const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <div>
      <Typography sx={{ fontWeight: "bold", marginBottom: 1.5 }}>
        {date}
      </Typography>
      <Typography sx={{ marginBottom: 1 }}>{day}</Typography>
      <img src={iconSrc} width="40" height="40" />
      <Typography sx={{ marginBottom: 1 }}>
        min: {Math.round(minTemp)}°C
      </Typography>
      <Typography sx={{ marginBottom: 1 }}>
        max: {Math.round(maxTemp)}°C
      </Typography>
    </div>
  );
};

export default DailyBlock;
