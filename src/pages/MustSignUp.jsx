import React from "react";
import Layout from '../components/Layout'
import { Link } from "react-router-dom";

const MustSignUp = () => {
    return(
        <Layout>
            <section className="must-sign-up" style={{minHeight: '100vh'}}>
                <div className="container">
                    <div className="row text-center justify-content-center">
                        <div className="col-md-7">
                            <h5 style={{marginTop: '200px'}}>
                                You must sign up before accessing products or cart page
                            </h5>
                            <Link to='/ecommerce/registration'
                            className="btn btn-primary text-light mt-3">
                                Go To Sign Up Page
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default MustSignUp;
