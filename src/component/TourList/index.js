import React, {Component} from "react";
import "./TourList.css";
import Tour from "../Tour/Tour";
import {tourData} from '../tourData';

export default class TourList extends 
Component {
  
  // Funksiyalar shu yerga yoziladi
  state = {
    tours: tourData
  };

  removeTour = id => {
    console.log(id);

    const {tours} = this.state;
    const sortedTours = tours.filter(tour => tour.id !==id);
    this.setState({
      tours:sortedTours
    })
  }
  //

  render() {

    const {tours} = this.state;

    return (
    <div>

    <section className="tourList">
      
      {tours.map(tour => {
        return <Tour key={tour.id} tour={tour} 
        removeTour={this.removeTour}/>
      })}

    </section>

    <div className="footer">      
       FOOTER
    </div>

    </div>
    )
  }
}
