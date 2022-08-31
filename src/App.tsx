import React from "react";
import NavigationBar from "./components/navbar/navbar";
import "./assets/styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex flex-column justify-content-between"
        >
          <div>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
