import { useState } from "react";
import UserForm from "./Components/CityForm/UserForm";
import NameBlock from "./Components/NameBlock/NameBlock";
import CurrentWeatherBlock from "./Components/CurrentWeatherBlock/CurrentWeatherBlock";
import SevenDayBlock from "./Components/SevenDayBlock/SevenDayBlock";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import { CurrentWeather } from "./Interfaces/Interface";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );

  const handleBackClick = () => {
    setCurrentWeather(null);
  };

  return (
    <div className="start-container">
      {currentWeather === null ? (
        <UserForm
          name={name}
          setName={setName}
          setCurrentWeather={setCurrentWeather}
        />
      ) : (
        <div>
          <div className="back-button">
            <IconButton color="inherit" size="large" onClick={handleBackClick}>
              <KeyboardBackspaceIcon sx={{ fontSize: "45px" }} />
            </IconButton>
          </div>
          <div className="weather-top">
            <NameBlock name={name} />
            <CurrentWeatherBlock currentWeather={currentWeather} />
          </div>
          <SevenDayBlock />
        </div>
      )}
    </div>
  );
}

export default App;
