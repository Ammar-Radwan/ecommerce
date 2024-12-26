import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/Slide.css";

class Sliders extends Component{
    render(){
     return(
        <>
        <Carousel className="main-slide" autoPlay={true} interval={2500} infiniteLoop={true} stopOnHover={false}>
            <div id="root">
                <img src='/images/homePage/img1.jpg' height="350px" width="300px" alt='slide 1'/>
            </div>
            <div id="root">
                <img src='/images/homePage/img2.jpg' height="350px" width="300px" alt='slide 2'/>
            </div>
            <div id="root">
                <img src='/images/homePage/img3.jpg' height="350px" width="300px" alt='slide 3'/>
            </div>
        </Carousel>        
        </>
    );
    }
}
export default Sliders;

