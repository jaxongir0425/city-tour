import React, {Component} from "react";
import "./component/Navbar/Navbar.js";
import './App.css';
import Navbar from "./component/Navbar/Navbar.js";
import TourList from "./component/TourList";

class App extends Component{
  render() {
    return (
     <main>
      <Navbar />
      <TourList />
    </main>
    )
  }
}

export default App;
