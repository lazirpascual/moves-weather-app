import "./NameBlock.css";
import Typography from "@mui/material/Typography";

const NameBlock = () => {
  const date = new Date();
  return (
    <div className="sidebar">
      <Typography variant="h4" color="whitesmoke">
        How's it going, Lazir?
      </Typography>
      <Typography variant="h5">
        Today is
        <span className="text-label">
          {" "}
          {new Date().toLocaleString("en-us", { weekday: "long" })},
        </span>
        <div className="text-label">
          {date.toLocaleDateString()},{" "}
          {date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </div>
      </Typography>
    </div>
  );
};

export default NameBlock;
