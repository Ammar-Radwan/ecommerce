import React from "react";

const Carousel = (props) => {
    return(
        <div id="main-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={props.img1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={props.img2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={props.img3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#main-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#main-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div className="container text-center">
                <div className="welcome">
                    <div className="content">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <h1>Unlock the Future of Electronics with Our Cutting-Edge Tech!</h1>
                                <p className="mt-3 px-5">Discover the latest electronics. Shop the best deals on gadgets, accessories, and more. Upgrade your tech today</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;

