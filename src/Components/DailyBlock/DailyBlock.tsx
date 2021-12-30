import Typography from "@mui/material/Typography";

const DailyBlock = () => {
  return (
    <div>
      <Typography sx={{ fontWeight: "bold", marginBottom: 1.5 }}>
        2021/12/29
      </Typography>
      <Typography sx={{ marginBottom: 1 }}>Wednesday</Typography>
      <Typography sx={{ marginBottom: 1 }}>min: -5°C</Typography>
      <Typography sx={{ marginBottom: 1 }}>max: 8°C</Typography>
    </div>
  );
};

export default DailyBlock;
