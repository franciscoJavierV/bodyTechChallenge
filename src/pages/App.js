import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home"
import SongData from "./SongData"

//styles
import "../assets/styles/App.css";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/song" component={SongData} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
