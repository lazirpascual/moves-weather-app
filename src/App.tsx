import UserForm from "./Components/CityForm/UserForm";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import "./App.css";

function App() {
  return (
    <div className="start-container">
      <div className="back-button">
        <IconButton color="inherit" size="large">
          <KeyboardBackspaceIcon sx={{ fontSize: "45px" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
