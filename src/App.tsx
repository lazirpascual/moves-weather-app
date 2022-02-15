import { useState, useEffect } from "react";
import { fetchCurrentData, fetchOneCallData } from "./Api";
import SearchForm from "./Components/SearchForm/SearchForm";
import NameBlock from "./Components/NameBlock/NameBlock";
import CurrentWeatherBlock from "./Components/CurrentWeatherBlock/CurrentWeatherBlock";
import SevenDayBlock from "./Components/SevenDayBlock/SevenDayBlock";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { CurrentWeather } from "./Interfaces/Interface";
import Grid from "@mui/material/Grid";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [dailyWeatherList, setDailyWeatherList] = useState<CurrentWeather[]>(
    []
  );

  useEffect(() => {
    const fetchLocalData = async () => {
      const city = localStorage.getItem("city");
      const name = localStorage.getItem("name");

      try {
        if (city && name) {
          const currentWeatherData = await fetchCurrentData(city);
          const oneCallData = await fetchOneCallData(
            currentWeatherData.lat,
            currentWeatherData.lon,
            currentWeatherData.city,
            currentWeatherData.country
          );
          // set current weather to first item in the list (current day)
          setCurrentWeather(oneCallData.dailyData[0]);
          setDailyWeatherList(oneCallData.dailyData);
          setName(name);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocalData();
  }, []);

  const handleBackClick = () => {
    setCurrentWeather(null);
    localStorage.setItem("city", "");
    localStorage.setItem("name", "");
  };

  return (
    <div className="start-container">
      {currentWeather === null ? (
        <SearchForm
          name={name}
          setName={setName}
          setCurrentWeather={setCurrentWeather}
          setDailyWeatherList={setDailyWeatherList}
        />
      ) : (
        <div>
          <div className="back-button">
            <IconButton color="inherit" size="large" onClick={handleBackClick}>
              <KeyboardBackspaceIcon sx={{ fontSize: "45px" }} />
            </IconButton>
          </div>
          <Grid container className="weather-top">
            <NameBlock name={name} />
            <CurrentWeatherBlock currentWeather={currentWeather} />
          </Grid>
          <div className="weather-bottom">
            <SevenDayBlock
              dailyWeatherList={dailyWeatherList}
              setCurrentWeather={setCurrentWeather}
            />
          </div>
          <div className="main-search-box">
            <img
              src="https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
            />
            <form action="https://google.com/search">
              <input
                type="text"
                name="q"
                className="round-input-text"
                placeholder="Search Google or type a url"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
