import { useState, useEffect } from "react";
import { fetchCurrentData, fetchOneCallData } from "./Api";
import SearchForm from "./Components/SearchForm/SearchForm";
import NameBlock from "./Components/NameBlock/NameBlock";
import CurrentWeatherBlock from "./Components/CurrentWeatherBlock/CurrentWeatherBlock";
import SevenDayBlock from "./Components/SevenDayBlock/SevenDayBlock";
import { CurrentWeather } from "./Interfaces/Interface";
import Grid from "@mui/material/Grid";
import GoogleSearch from "./Components/GoogleSearch/GoogleSearch";
import Header from "./Components/Header/Header";
import BackgroundDialog from "./Components/BackgroundDialog/BackgroundDialog";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [dailyWeatherList, setDailyWeatherList] = useState<CurrentWeather[]>(
    []
  );
  const [background, setBackground] = useState<string>("");

  useEffect(() => {
    const fetchLocalData = async () => {
      const city = localStorage.getItem("city");
      const name = localStorage.getItem("name");
      const background = localStorage.getItem("background");

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

        if (background) {
          setBackground(background);
        } else {
          setBackground("https://i.imgur.com/hj2L1tO.jpg");
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

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className="start-container" style={backgroundStyle}>
        {currentWeather === null ? (
          <SearchForm
            name={name}
            setName={setName}
            setCurrentWeather={setCurrentWeather}
            setDailyWeatherList={setDailyWeatherList}
          />
        ) : (
          <div>
            <Header handleBackClick={handleBackClick} />
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
            <GoogleSearch />
          </div>
        )}
      <BackgroundDialog setBackground={setBackground} />
    </div>
  );
}

export default App;
