import React, {useEffect} from 'react';
import logo from './logo.svg';
import {Icon} from '@iconify/react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import './App.css';

function App() {


  return (
    <div className="App">
     
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
      

      </Routes>
    </div>  
  );
}

export default App;
