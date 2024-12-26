import React from 'react';
import Layout from '../components/Layout'
import Carousel from '../components/home/Carousel';
import * as homeImgs from '../assets/homePage/index'
import '../css/Home.css'

const Home = () => {
    return(
        <Layout>
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel 
                                img1={homeImgs.carouselImg1}
                                img2={homeImgs.carouselImg2}
                                img3={homeImgs.carouselImg3}
                            />
                        </div>
                        <div className="brand-box col-md-12">
                            <h1>Brands</h1>
                            <div className="brands text-center">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={homeImgs.brandLogo1}
                                        className="w-100"/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src={homeImgs.brandLogo2}
                                        className="w-50"/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src={homeImgs.brandLogo3}
                                        className="w-50"/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src={homeImgs.brandLogo4}
                                        className="w-50"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Home;
