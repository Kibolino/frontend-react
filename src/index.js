import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Menu from './Menu';
import Sobre from './Sobre';
import Usuarios from './Usuarios';
import Footer from './Footer';
import Farejador from './Farejador';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Menu/>
  <Routes>
  <Route path="/" element={<App />} />
    <Route path="sobre" element={<Sobre/>}/>
    <Route path="pessoas" element={<Usuarios/>}/>
    <Route path="farejador" element={<Farejador/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  
);

