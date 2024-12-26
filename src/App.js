import React from 'react'
import MainRouter from './routers/MainRouter'
import { MainProvider } from './contexts/MainContext';
import { RouterProvider } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <MainProvider>
      <div className="App">
        <RouterProvider router={MainRouter} />
      </div>
    </MainProvider>
  );
}

export default App;
