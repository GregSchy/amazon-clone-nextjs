import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
            <div>
                <img loading="lazy" src="https://links.papareact.com/gi1"></img>
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/6ff"></img>
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/7ma"></img>
            </div>

        </Carousel>
    </div>
  )
}

export default Banner