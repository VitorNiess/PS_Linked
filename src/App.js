import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import IntroPage from './components/intropage/IntroPage';
import Projects from './components/projects/Projects';

export default function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <IntroPage/>
      <Projects/>
      <Footer></Footer>
    </div>
  );

}