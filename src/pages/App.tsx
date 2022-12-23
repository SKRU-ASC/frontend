import reactLogo from "../assets/images/react.svg";
import "../assets/css/App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
    </div>
  );
}

export default App;
