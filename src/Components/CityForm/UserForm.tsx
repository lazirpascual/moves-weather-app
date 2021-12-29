import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./UserForm.css";

const UserForm = () => {
  return (
    <div>
      <form className="start-card">
        <Typography sx={{ fontWeight: "bold" }} color="aliceblue" variant="h5">
          Welcome to
          <span className="text-color"> Moves Weather App</span>
        </Typography>
        <Typography color="aliceblue">
          Please enter your <b>name</b> and <b>location</b>
        </Typography>
        <TextField
          sx={{ m: 1, width: "20ch" }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ className: "text-label" }}
          label="Name"
          variant="filled"
          size="small"
          color="primary"
          required
        />
        <TextField
          sx={{ m: 1, width: "20ch" }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ className: "text-label" }}
          label="City or Zip Code"
          variant="filled"
          size="small"
          required
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
