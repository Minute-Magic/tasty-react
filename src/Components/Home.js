import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                Enjoy Tasty Meals, Straight to Your Plate, Always Fresh and Hot!
                </h1>
                <p className='primary-text'>
                Dive into our yummy meals, made just for you and brought to your door, so you can enjoy every bite without waiting!
                </p>
                <button className='secondary-button'>
                    Order Now <FiArrowRight/>{""}
                </button>
            </div>
            <div className='home-image-section'>
                <img src={BannerImage} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Home