import React from "react";
import './Home.css';
import home_top from '../images/home_top.png'
import home_two from '../images/home_two.png'

export default function Home(){
    return(
        <div className="home_body">
            <div className='top_image_row'>
                <img src={home_top} className="welcome" />
                <div className='top_image_text'>
                    <div className='overlay'>Brooklyn Table Tennis Club</div>
                    <button className='contact_button'> Contact </button>
                </div>
            </div>
            <div className='about_us'>
                <div className='about_us_text'>
                    <h1>About Us</h1>
                    <p>It all starts with a dream: a dream to be healthy, a dream to be
                        strong, a dream to be fast, and a dream to be #1. At Brooklyn Table
                        Tennis Club, we've been making dreams come true since 2000. Our
                        Brooklyn facility has been designed to provide an outstanding
                        environment for athletes of all levels and abilities. Whether you're a
                        novice or a professional, reach your potential with Brooklyn Table
                        Tennis Club.</p>
                </div>
                <img src={home_two} className="about_us_image" />
            </div>
        </div>
    );
}
