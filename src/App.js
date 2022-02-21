import React from 'react';
import Weather from "./Weather";

import './App.css';

export default function App() {
  return ( 
  <div className="App">
    <div className="container">
      
      <Weather defaultCity="Berlin" />
      <footer>
       This project was coded by me and is {" "}
        <a 
         href="https://github.com/eriko1819/react-weather-app-soph"
         target="_balnk"
        >
        open-sourced on GitHub</a>
      </footer>
    </div> 
  </div> 
  );
}
