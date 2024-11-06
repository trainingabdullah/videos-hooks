import React from "react";
// import  ReactDOM ,{ createRoot } from "react-dom";
import { createRoot } from 'react-dom/client'; // Correct import from react-dom/client

import App from "./components/App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Use createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);