import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Page from "./Page";
function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
