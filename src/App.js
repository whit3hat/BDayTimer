import React from "react";
import "./App.css";
import Birthday from "./Birthday";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import RouterBirthday from "./RouterBirthday";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Birthday />} />
        <Route
          path="/birthday/:name?/:day?/:month?"
          element={<RouterBirthday />}
        />
      </Routes>
    </div>
  );
}

export default App;
