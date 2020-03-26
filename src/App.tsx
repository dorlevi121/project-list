import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar.layout";
import Routing from './app.routing';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routing/>
      </div>
    </BrowserRouter>
  );
}

export default App;
