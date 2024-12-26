import React from 'react'
import SocialMedia from '../components/about/FontAwesome'
import Footer from '../components/Footer'
import '../css/About.css'

const About = () => {
    return(
        <div className="d-flex flex-column min-vh-100">
            <div className='container'>
                <h4 className='wel'>Welcome To</h4>
                <h1 style={{textAlign:'center'}}>Seamless E-Commerce</h1>
                <h1 className='us'>ABOUT US</h1>
                <p className='ab'>In 1996, the first item ever ordered on seamless E-commerce was 
                delivered to a customer in Egypt. In the years that followed,
                we have worked hard to continually improve your shopping experience
                by adding a wide sellection of products, offering faster delivery
                and consistently focusing on great value. There have been many
                milestones for Seamless.com over the years, and today we have 
                another one to share with you.</p>
                <p className='ab'> With millions of products on Seamless, you can now shop local 
                and international brands and find everything you need across electronics,
                and more. As you shop on Seamless, you will enjoy the same great prices
                and easy payment options that you did on Seamless. </p>
                <h1 className='con'>Feel Free To Contact Us</h1>
                <SocialMedia/>
            </div>
            <Footer/>
        </div>
    );
}



export default About;