import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { NavLink, Link } from "react-router-dom";
import '../css/Layout.css'

function Layout({ children }){
    const { isSignedUp, cartCount } = useContext(MainContext)
    const ROOT = '/electronics-ecommerce'

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
                            <NavLink 
                              to={`${ROOT}/home`}
                              className={({ isActive }) => (
                                `${isActive ? 'active': ''}
                                nav-link main-color-hover`
                              )}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li key='about' className='nav-item'>
                            <NavLink 
                              to={`${ROOT}/about`}
                              className={({ isActive }) => (
                                `${isActive ? 'active': ''}
                                nav-link main-color-hover`
                              )}
                            >
                                About
                            </NavLink>
                        </li>
                        <li key='products' className='nav-item'>
                            <NavLink 
                              to={isSignedUp ? `${ROOT}/products`: `${ROOT}/must-sign-up`}
                              className={({ isActive }) => (
                                `${isActive ? 'active': ''}
                                nav-link main-color-hover`
                              )}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li key='registration' className='nav-item'>
                            <NavLink 
                              to={`${ROOT}/registration`}
                              className={({ isActive }) => (
                                `${isActive ? 'active': ''}
                                nav-link main-color-hover`
                              )}
                            >
                                Registration
                            </NavLink>
                        </li>
                        <li key='login' className='nav-item'>
                            <NavLink 
                              to={`${ROOT}/login`}
                              className={({ isActive }) => (
                                `${isActive ? 'active': ''}
                                nav-link main-color-hover`
                              )}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink 
                              to={isSignedUp ? `${ROOT}/cart`: `${ROOT}/must-sign-up`}
                              className={({ isActive }) => (
                                `${isActive ? 'active': ''}
                                nav-link main-color-hover`
                              )}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="link-name">Cart</span>
                                {cartCount > 0 ? 
                                    <span className="notifications">{cartCount}</span>: ''
                                }
                            </NavLink>
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


