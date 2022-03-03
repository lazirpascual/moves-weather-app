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
// @ts-ignore
import FillingBottle from "react-cssfx-loading/lib/FillingBottle";
import { Typography } from "@mui/material";
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
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const updateWeather = async (city: string) => {
    const currentWeatherData = await fetchCurrentData(city);
    if (currentWeatherData) {
      setIsFetching(true);
      const oneCallData = await fetchOneCallData(
        currentWeatherData.lat,
        currentWeatherData.lon,
        currentWeatherData.city,
        currentWeatherData.country
      );
      if (oneCallData) {
        // set current weather to first item in the list (current day)
        setCurrentWeather(oneCallData.dailyData[0]);
        setDailyWeatherList(oneCallData.dailyData);
        setIsFetching(false);
      }
    }
  };

  useEffect(() => {
    const fetchLocalData = async () => {
      const city = localStorage.getItem("city");
      const name = localStorage.getItem("name");
      const background = localStorage.getItem("background");

      try {
        if (city && name) {
          await updateWeather(city);
          setName(name);
        }
        if (background) {
          setBackground(background);
        } else {
          setBackground("https://i.imgur.com/hj2L1tO.jpg");
        }
        setIsFetching(false);
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
    <div>
      {isFetching ? (
        <div className="loading-state">
          <FillingBottle color="#FF0000" width="100px" height="100px" />
          <Typography variant="h3" sx={{ marginTop: 10 }}>
            Loading Weather Data...
          </Typography>
        </div>
      ) : (
        <div className="start-container" style={backgroundStyle}>
          {currentWeather === null ? (
            <SearchForm
              name={name}
              setName={setName}
              updateWeather={updateWeather}
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
      )}
    </div>
  );
}

export default App;
