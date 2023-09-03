import React from 'react'
import Home from "./header";
import ProductsList from './products';
import Slideshow from './bannerSlider';
import Footer from './Footer';
import Social from './social';
import Slider from './slide';
import ProductABC from './product2';
import CTA from './CTA';

const HomePage = () => {
  return (
    <div>
        <Home/>
        <Slider/>
        {/* <CTA/> */}
        <ProductABC/>
        <Social/>
        <Footer/>
    </div>
  )
}

export default HomePage