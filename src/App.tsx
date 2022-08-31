import React from "react";
import NavigationBar from "./components/navbar/navbar";
import "./assets/styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home
 from "./components/home/home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
