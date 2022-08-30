import React from "react";
import NavigationBar from "./components/navbar";
import "./assets/styles/App.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
