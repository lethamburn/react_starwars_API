import React from "react";
import ReactDOM from 'react-dom';
import "./index.scss";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import SpaceBackground from "./components/SpaceBackground/SpaceBackground";

ReactDOM.render(
  <React.StrictMode>
  <SpaceBackground />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
