import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" country="in" category="general" />}
          />
          <Route
            path="/health"
            element={<News key="health" country="in" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" country="in" category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" country="in" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News key="technology" country="in" category="technology" />
            }
          />
          <Route
            exact
            path="/business"
            element={<News key="business" country="in" category="business" />}
          />
          <Route
            path="/entertainment"
            element={
              <News key="entertainment" country="in" category="entertainment" />
            }
          />

          {/* < path="/health">
            <News country="in" category="health" />healthsports
          </
          <Route path="/science">
            <News country="in" category="science" />
          </Route>

          <Route path="/sports">
            <News country="in" category="sports" />
          </Route>

          <Route path="/technology">
            <News country="in" category="technology" />
          </Route>

          <Route path="/business">
            <News country="in" category="business" />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
