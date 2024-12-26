import React from 'react';
import Carousel from '../components/home/Carousel';
import '../css/Home.css'

const Home = (props) => {
    return(
        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Carousel 
                            img1="/images/homePage/01.jpg"
                            img2="/images/homePage/02.jpg"
                            img3="/images/homePage/03.jpg"
                        />
                    </div>
                    <div className="brand-box col-md-12">
                        <h1>Brands</h1>
                        <div className="brands text-center">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="/images/homePage/brand_01.png"
                                    className="w-100"/>
                                </div>
                                <div className="col-md-3">
                                    <img src="/images/homePage/brand_02.png"
                                    className="w-50"/>
                                </div>
                                <div className="col-md-3">
                                    <img src="/images/homePage/brand_03.png"
                                    className="w-50"/>
                                </div>
                                <div className="col-md-3">
                                    <img src="/images/homePage/brand_04.png"
                                    className="w-50"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer w-100 mt-5 py-3 text-center">
                        All Rights Reserver for All Team Members
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
