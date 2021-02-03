import React, {Component} from "react";
import "./component/Navbar/Navbar.js";
import './App.css';
import Navbar from "./component/Navbar/Navbar.js";
import TourList from "./component/TourList";
import Footer from './component/Footer/Footer'

class App extends Component{
  render() {
    return (
    <main>
      <Navbar />
      <TourList />
      <Footer />
    </main>
    )
  }
}

export default App;
