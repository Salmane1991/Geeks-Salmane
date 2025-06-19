import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hongkong from "./assets/hongkong.jpg";
import macao from "./assets/macao.webp";
import japan from "./assets/japan.webp";
import lasvegas from "./assets/lasvegas.webp";

class App extends Component {
  render() {
    return (
      <div className="carousel-wrapper">
        <Carousel>
          <div>
            <img src={hongkong} alt="Hong Kong" />
            <p className="legend">HongKong</p>
          </div>
          <div>
            <img src={macao} alt="Macao" />
            <p className="legend">Macao</p>
          </div>
          <div>
            <img src={japan} alt="Japan" />
            <p className="legend">Japan</p>
          </div>
          <div>
            <img src={lasvegas} alt="Las Vegas" />
            <p className="legend">Las Vegas</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
