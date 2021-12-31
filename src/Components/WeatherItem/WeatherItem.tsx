import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./WeatherItem.css";

interface Props {
  icon: unknown;
  labelName: string;
  value: string;
}

const WeatherItem: React.FC<Props> = ({ icon, labelName, value }) => {
  return (
    <Grid item xs={6} md={6} key={labelName}>
      <Grid container direction="row">
        {icon}
        <Typography color="#FFFFFFDE" sx={{ marginLeft: 1 }}>
          {labelName}
        </Typography>
      </Grid>
      <Typography
        variant="h6"
        color="aliceblue"
        sx={{ marginLeft: 4, fontWeight: "bold" }}
      >
        {value}
      </Typography>
    </Grid>
  );
};

export default WeatherItem;
