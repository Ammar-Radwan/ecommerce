import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";
import '../css/Layout.css'

function Layout({ children }){
    const { isSignedUp, cartCount } = useContext(MainContext)
    const ROOT = '/electronics-ecommerce'

    const handleLink = (e) => {
        var linksList = document.querySelectorAll('.nav-link');
        for(var i=0; i<linksList.length; i++){
            linksList[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }

    return(
        <div className="layout">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className='navbar-brand' 
                    to='${ROOT}/products'><h3>BRAND.</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li key='home' className='nav-item'>
                            <Link className='nav-link active main-color-hover' onClick={handleLink}
                            to={`${ROOT}/home`}>Home</Link>
                        </li>
                        <li key='about' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to={`${ROOT}/about`}>About</Link>
                        </li>
                        <li key='products' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to={isSignedUp ? `${ROOT}/products`: `${ROOT}/must-sign-up`}>
                            Products</Link>
                        </li>
                        <li key='registration' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to={`${ROOT}/registration`}>Registration</Link>
                        </li>
                        <li key='login' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to={`${ROOT}/login`}>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link main-color-hover" onClick={handleLink} 
                            to={isSignedUp ? `${ROOT}/cart`: `${ROOT}/must-sign-up`}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="link-name">Cart</span>
                                {cartCount > 0 ? 
                                    <span className="notifications">{cartCount}</span>: ''
                                }
                            </Link>
                        </li>
                    </ul>
                    </div>
                </nav>
                <main>
                    { children }
                </main>
                <footer>
                    <div className="footer rounded w-100 my-3 py-3 text-center">
                        Copyright &copy; 2023 Ammar Radwan, All Rights Reserveds.
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Layout;


