import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WaterIcon from "@mui/icons-material/Water";
import WeatherItem from "../Components/WeatherItem/WeatherItem";

// this is testing if the WeatherItem component for the current weather is being generated properly
test("<WeatherItem /> renders the correct content", () => {
  const icon = <WaterIcon />;

  render(<WeatherItem icon={icon} labelName="Humidity" value="92%" />);

  // check if the rendered WeatherItem contains the correct content
  expect(screen.getByText(/Humidity/)).toBeInTheDocument();
  expect(screen.getByText(/92%/)).toBeInTheDocument();
});
