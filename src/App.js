import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";
import Travels from "./Travels"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Where I'd like to go.</h1>
        </header>
        <Travel
          destination="Alpilles Mountains"
          country="France"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Van_Gogh_The_Olive_Trees..jpg/240px-Van_Gogh_The_Olive_Trees..jpg"
          credit="Van Gogh, 'Oliviers avec les Alpilles à l'arrière-plan', 1889 "
          distance="80 km from Marseille"
        />
        <Travel
          destination="Monument Valley"
          country="Utah, USA"
          photo="https://cbsnews3.cbsistatic.com/hub/i/r/2014/03/01/81258710-7db3-4854-9a3c-1059e6f2d5ed/resize/620x465/4ef5b0ec54ff9d1a27d1fb13f71c4ca7/monument-valley-the-searchers-04.jpg#"
          credit="John Ford, 'The Searchers', 1956"
          distance=" 8500 km from Marseille"
        />
        <Travels/>
      </div>
    );
  }
}

export default App;

