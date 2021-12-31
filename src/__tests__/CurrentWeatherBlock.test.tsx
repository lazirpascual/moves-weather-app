import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CurrentWeatherBlock from "../Components/CurrentWeatherBlock/CurrentWeatherBlock";

// this is testing if the CurrentWeatherBlock component is being generated properly
test("<CurrentWeatherBlock /> renders the correct content", () => {
  const currentWeather = {
    city: "Kitchener",
    clouds: 100,
    country: "CA",
    current_temp: 2.7,
    desc: "overcast clouds",
    dt: 1640970000,
    feels_like: -0.93,
    humidity: 92,
    icon: "04d",
    max_temp: 3.26,
    min_temp: -0.07,
    pop: 0.05,
    pressure: 1012,
    sunrise: 1640955282,
    sunset: 1640987721,
    wind_speed: 4,
  };

  render(<CurrentWeatherBlock currentWeather={currentWeather} />);

  // check if the rendered CurrentWeatherBlock contains the correct content
  expect(screen.getByText(/3°C/)).toBeInTheDocument();
  expect(screen.getByText(/Kitchener, CA/)).toBeInTheDocument();
  expect(screen.getByText(/overcast clouds/)).toBeInTheDocument();
  expect(screen.getByText(/Friday/)).toBeInTheDocument();
  expect(screen.getByText(/92%/)).toBeInTheDocument();
  expect(screen.getByText(/1012 hPa/)).toBeInTheDocument();
  expect(screen.getByText(/-1°C/)).toBeInTheDocument();
  expect(screen.getByText(/7:54 AM/)).toBeInTheDocument();
  expect(screen.getByText(/4:55 PM/)).toBeInTheDocument();
  expect(screen.getByText(/100%/)).toBeInTheDocument();
  expect(screen.getByText(/5%/)).toBeInTheDocument();
});
