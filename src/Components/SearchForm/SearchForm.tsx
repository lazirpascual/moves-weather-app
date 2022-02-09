import { useState, Dispatch, SetStateAction } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CurrentWeather } from "../../Interfaces/Interface";
import { fetchCurrentData, fetchOneCallData } from "../../Api";
import Notification from "../Notification/Notification";
import "./SearchForm.css";

interface Props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeather | null>>;
  setDailyWeatherList: React.Dispatch<React.SetStateAction<CurrentWeather[]>>;
}

const SearchForm: React.FC<Props> = ({
  name,
  setName,
  setCurrentWeather,
  setDailyWeatherList,
}) => {
  const [userInput, setUserInput] = useState<string>("");
  const [nameExist, SetNameExists] = useState<boolean>(name ? true : false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

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
      // set current weather to first item in the list (current day)
      setCurrentWeather(oneCallData.dailyData[0]);
      setDailyWeatherList(oneCallData.dailyData);
      localStorage.setItem("city", userInput);
      localStorage.setItem("name", name);
    } catch (error: any) {
      if (error.response.status === 404) {
        DisplayError(
          `Error 404: City/Zip Code "${userInput}" does not exist. Ensure that it is typed correctly and try again.`
        );
      } else if (error.response.status === 400) {
        DisplayError("Error 400: Bad Request. Unable to fetch from the API.");
      } else if (error.response.status === 500) {
        DisplayError("Error 500: Internal Server Error.");
      }
      setUserInput("");
    }
  };

  const DisplayError = (errorMsg: string) => {
    setNotificationMessage(errorMsg);
    setOpenNotification(true);
  };

  const handleEditClick = () => {
    SetNameExists(false);
  };

  return (
    <div>
      <Notification
        message={notificationMessage}
        open={openNotification}
        setOpen={setOpenNotification}
        type="error"
      />
      <form onSubmit={handleSubmitClick} className="start-card">
        <Typography sx={{ fontWeight: "bold" }} color="aliceblue" variant="h4">
          Welcome to
          <span className="text-color"> Moves Weather App!</span>
        </Typography>
        <Typography color="aliceblue" variant="h6">
          Please enter your <b>name</b> and <b>location</b>
        </Typography>
        {nameExist ? (
          <div className="display-name">
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginRight: 2 }}
            >
              {name}
            </Typography>
            <IconButton color="inherit" size="small" onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
          </div>
        ) : (
          <TextField
            onChange={(e) => setName(e.target.value)}
            sx={{ m: 1, width: "20ch" }}
            inputProps={{ style: { color: "white" } }}
            InputLabelProps={{ className: "text-label" }}
            autoComplete="off"
            label="Name"
            variant="filled"
            size="small"
            color="primary"
            required
          />
        )}
        <TextField
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          sx={{ m: 1, width: "20ch" }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ className: "text-label" }}
          autoComplete="off"
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

export default SearchForm;
