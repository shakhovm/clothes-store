import React from 'react';

import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SlideContent from "./components/picture_slider/slide_content";
import MainBlock from "./components/main_blocks/MainBlock";



function App() {
  return (
      <>
        <Header/>
        <SlideContent/>
        <MainBlock/>
        <Footer/>

      </>
  );
}

export default App;
