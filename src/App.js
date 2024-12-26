import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Proudcts from './pages/Products'
import Registration from './pages/Registration'
import MustSignUp from './pages/MustSignUp'
import Login from './pages/Login'
import Cart from './pages/Cart'

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [signedUp, setSignedUp] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout isSignedUp={signedUp} cartCount={count}/>}>
            <Route index element={<Home />}></Route>
            <Route path='/electronics-ecommerce/home' element={<Home />}></Route>
            <Route path='/electronics-ecommerce/about' element={<About />}></Route>
            <Route path='/electronics-ecommerce/products' element={<Proudcts updateCart={setCount}/>}></Route>
            <Route path='/electronics-ecommerce/must-sign-up' element={<MustSignUp setSignedUp={setSignedUp}/>}/>
            <Route path='/electronics-ecommerce/registration' 
            element={<Registration setSignedUp={setSignedUp} />}></Route>
            <Route path='/electronics-ecommerce/login' element={<Login setSignedIn={setSignedUp}  />}></Route>
            <Route path='/electronics-ecommerce/cart' element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
