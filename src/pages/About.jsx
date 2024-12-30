import React from 'react'
import SocialMediaLinks from '../components/about/SocialMediaLinks'
import Layout from '../components/Layout'
import '../css/About.css'

const About = () => {
    return(
        <Layout>
            <div
              className="d-flex flex-column justify-content-center align-items-center py-5"
            >
                <div className='container'>
                    <h1>ABOUT US</h1>

                    <p>In 1996, the first item ever ordered on seamless E-commerce was 
                    delivered to a customer in Egypt. In the years that followed,
                    we have worked hard to continually improve your shopping experience
                    by adding a wide sellection of products, offering faster delivery
                    and consistently focusing on great value. There have been many
                    milestones for Seamless.com over the years, and today we have 
                    another one to share with you.</p>

                    <p> With millions of products on Seamless, you can now shop local 
                    and international brands and find everything you need across electronics,
                    and more. As you shop on Seamless, you will enjoy the same great prices
                    and easy payment options that you did on Seamless. </p>

                    <h4 className='mt-4'>Feel Free To Contact Us</h4>
                    <SocialMediaLinks />
                </div>
            </div>
        </Layout>
    );
}



export default About;