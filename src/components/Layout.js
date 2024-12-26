import { Outlet, Link } from "react-router-dom";
import '../css/Layout.css'

function Layout(props){

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
                    to='/electronics-ecommerce/products'><h3>BRAND.</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li key='home' className='nav-item'>
                            <Link className='nav-link active main-color-hover' onClick={handleLink}
                            to='/electronics-ecommerce/home'>Home</Link>
                        </li>
                        <li key='about' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to='/electronics-ecommerce/about'>About</Link>
                        </li>
                        <li key='products' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to={props.isSignedUp ? '/electronics-ecommerce/products': '/electronics-ecommerce/must-sign-up'}>
                            Products</Link>
                        </li>
                        <li key='registration' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to='/electronics-ecommerce/registration'>Registration</Link>
                        </li>
                        <li key='login' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to='/electronics-ecommerce/login'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link main-color-hover" onClick={handleLink} 
                            to={props.isSignedUp ? '/electronics-ecommerce/cart': '/electronics-ecommerce/must-sign-up'}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="link-name">Cart</span>
                                {props.cartCount > 0 ? 
                                    <span className="notifications">{props.cartCount}</span>: ''
                                }
                            </Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
        </div>
    );
}

export default Layout;


