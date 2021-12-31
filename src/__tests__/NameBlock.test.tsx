import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NameBlock from "../Components/NameBlock/NameBlock";

// this is testing if the name block for the current weather is being generated properly
test("<NameBlock /> renders the correct content", () => {
  const testName = "Lazir";
  const testDate = new Date().toLocaleString("en-us", { weekday: "long" });

  render(<NameBlock name={testName} />);

  // check if the rendered NameBlock contains the correct content
  expect(screen.getByText(/Lazir/)).toBeInTheDocument();
  expect(screen.getByText(testDate + ",")).toBeInTheDocument();
});
