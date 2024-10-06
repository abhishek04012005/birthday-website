import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import './Hero.css';
import Countdown from '../Custom/Countdown/Countdown';
import HeroBalloon from '../../assests/hero_balloon.svg'
import Test from '../Test/Test';

const Hero = () => {

    return (
        <>
            <div id='home-section'>
                <div className="hero" >
                    <div className="hero-container">
                        <div className="top-image-hero">
                            {/* <img src={HeroTopImage} alt="" /> */}
                        </div>


                        <div className="bottom-image-hero">

                            <div className='hero-middle-container'>


                                <Grid container justifyContent="space-around">
                                    {/* <Grid item xs={12} sm={12} md={3}>
                                        <div className="photo-frame-responsive">
                                            <img src={PhotoWithFrame} alt="" />
                                            <Test />
                                        </div>
                                    </Grid> */}
                                    <Grid item xs={12} sm={12} md={6}>
                                        <div className="hero-left-container">
                                            <div className="hero-left-balloon"> <img src={HeroBalloon} alt="" /> </div>
                                            <div className="hero-birthday-text">
                                                <p className='birthday-title'>SAMARTH</p>
                                                <h2 className='birthday-date'>is turning one
                                                </h2>
                                                <h2 className='birthday-date'>on 11 Sep 2024
                                                </h2>
                                            </div>
                                            <div className="hero-right-balloon"><img src={HeroBalloon} alt="" /></div>
                                        </div>
                                        <div className='countdown-btn'>
                                            <Countdown />
                                        </div>
                                        {/* <div className="hero-btn">
                                            <div className='hero-monkey-image'>
                                                <img src={MonkeyImage} alt="" />
                                            </div>
                                            <div>
                                                <Button variant="contained" sx={{ backgroundColor: '#244E3C', color: 'white', mt: 0 }} >
                                                    <Link to="rspv-section" smooth={true} duration={800} >Yes, I'm in</Link>
                                                </Button>
                                            </div>
                                        </div> */}

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Test />
                                        <Button variant="contained" sx={{ backgroundColor: '#244E3C', color: 'white', mt: 0 }} >
                                            <Link to="rspv-section" smooth={true} duration={800} >Yes, I'm in</Link>
                                        </Button>
                                    </Grid>
                                </Grid>




                            </div>

                        </div>


                    </div>
                </div>


            </div>
        </>
    );
}

export default Hero;

