import { useState, Dispatch, SetStateAction } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CurrentWeather } from "../../Interfaces/Interface";
import { fetchCurrentData, fetchOneCallData } from "../../Api";
import "./UserForm.css";

interface Props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeather | null>>;
}

const UserForm: React.FC<Props> = ({ name, setName, setCurrentWeather }) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleSubmitClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const currentWeatherData = await fetchCurrentData(userInput);
      const oneCallData = await fetchOneCallData(
        currentWeatherData.lat,
        currentWeatherData.lon,
        currentWeatherData.city,
        currentWeatherData.country
      );
      setCurrentWeather(oneCallData.dailyData[0]);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitClick} className="start-card">
        <Typography sx={{ fontWeight: "bold" }} color="aliceblue" variant="h5">
          Welcome to
          <span className="text-color"> Moves Weather App</span>
        </Typography>
        <Typography color="aliceblue">
          Please enter your <b>name</b> and <b>location</b>
        </Typography>
        <TextField
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setUserInput(e.target.value)}
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
