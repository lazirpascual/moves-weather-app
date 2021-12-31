import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DailyBlock from "../Components/DailyBlock/DailyBlock";

// this is testing if the daily block for the seven day block is being generated properly
test("<DailyBlock /> renders the correct content", () => {
  const testDate = "28/12/2021";
  const testDay = "Tuesday";
  const iconSrc = "04n";
  const testMinTemp = parseFloat("-7");
  const testMaxTemp = parseFloat("1");

  render(
    <DailyBlock
      date={testDate}
      day={testDay}
      icon={iconSrc}
      minTemp={testMinTemp}
      maxTemp={testMaxTemp}
    />
  );

  // check if the rendered DailyBlock contains the correct content
  expect(screen.getByText(/28\/12\/2021/)).toBeInTheDocument();
  expect(screen.getByText(/Tuesday/)).toBeInTheDocument();
  expect(screen.getByText(/-7°C/)).toBeInTheDocument();
  expect(screen.getByText(/1°C/)).toBeInTheDocument();
});
