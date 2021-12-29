import UserForm from "./Components/CityForm/UserForm";
import NameBlock from "./Components/NameBlock/NameBlock";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import "./App.css";

function App() {
  return (
    <div className="start-container">
      <div>
        <div className="back-button">
          <IconButton color="inherit" size="large">
            <KeyboardBackspaceIcon sx={{ fontSize: "45px" }} />
          </IconButton>
        </div>
        <div className="weather-top">
          <NameBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
