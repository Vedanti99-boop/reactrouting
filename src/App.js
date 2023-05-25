// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Error from "./Components/Error";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [switchText, switchTextSet] = useState("Enable dark mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      switchTextSet("Enable light mode");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode("light");
      switchTextSet("Enable dark mode");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode is Enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <BrowserRouter>
      <Alert alert={alert} />
      <Navbar
        title="React js"
        mode={mode}
        toggleMode={toggleMode}
        switchText={switchText}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="textform"
          element={
            <TextForm
              heading="Enter anything you like"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
