import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
          <Route path='/' element={<Navigate to='/electronics-ecommerce/home' />} />
          <Route path='/electronics-ecommerce' element={<Layout isSignedUp={signedUp} cartCount={count}/>}>
            <Route index element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/products' element={<Proudcts updateCart={setCount}/>}></Route>
            <Route path='/must-sign-up' element={<MustSignUp setSignedUp={setSignedUp}/>}/>
            <Route path='/registration' 
            element={<Registration setSignedUp={setSignedUp} />}></Route>
            <Route path='/login' element={<Login setSignedIn={setSignedUp}  />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
