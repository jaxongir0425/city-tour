import React, {Component} from "react";
import "./Tour.css";
import down from "../../down.ico";
import iks from "../../iks X.ico";

export default class Tour extends 
Component {

  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    });
  };

  render() {

    // Funksiya yozamiz
    const {id, city, img, name, info } = this.props.tour;

    const { removeTour } = this.props;

    return (
    <article className="tour col-3">
        
        <div className="img-container">
            <img 
            src={img}
            alt=""
            />
            <span className="close-btn" onClick={()=>{removeTour(id)}}>
                <img src={iks}></img>
            </span>
        </div>

        <div className="tour-info">
            <h2>{city}</h2>
            <h3>{name}</h3>
            <h4 className="info-btn">
                info{" "}
                <span onClick={this.handleInfo}>
                  <img src={down}></img>
                </span>
            </h4>
            {this.state.showInfo && <p>{info}</p>}            
        </div>

    </article>
    )
  }
}
