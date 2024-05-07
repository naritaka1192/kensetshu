import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './contents/home';
import Civil from './contents/civil';
import Buildass from './contents/buildass';
import Jumping from './contents/jumping';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
  <App />
  <Routes>
    <Route path='home' element={<Home />}/>
    <Route path='content' element={<Jumping />}/>
    <Route path='civil' element={<Civil />}/>
    <Route path='buildass' element={<Buildass />}/>
  </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
