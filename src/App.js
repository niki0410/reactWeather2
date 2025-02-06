import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
        <span>This project was coded by </span> 
        <a href="https://github.com/niki0410" target="_blank" rel="noreferrer">Nikolett Hartmann</a> <span> and is </span>
        <a href="https://github.com/niki0410/reactWeather2" target="_blank" rel="noreferrer">on GitHub</a><span> and </span>  
        <a href="https://weather-react-app-2.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
  
        </footer>
      </div>
    </div>
  );
}