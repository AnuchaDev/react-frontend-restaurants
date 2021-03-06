import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PlaceList from "./Components/PlaceList/placelist";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PlaceDetail from "./Components/PlaceDetail/placedetail";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<PlaceList />} />
      <Route exact path="/:id" element={<PlaceDetail />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
