import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import MonkeyImage from '../../assests/animals/monkey.svg'
import './Hero.css';
import Countdown from '../Custom/Countdown/Countdown';
import PhotoWithFrame from '../../assests/frame_with_photo.png'

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
                                    <Grid item xs={12} sm={12} md={3}>
                                        <div className="photo-frame-responsive">
                                            <img src={PhotoWithFrame} alt="" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <p className='birthday-title'>SAMARTH'S 1st BIRTHDAY</p>
                                        <h2 className='birthday-date'>on 11 Dec 2024
                                        </h2>
                                        <div className='countdown-btn'>
                                            <Countdown />
                                        </div>
                                        <div className="hero-btn">
                                            <div className='hero-monkey-image'>
                                                <img src={MonkeyImage} alt="" />
                                            </div>
                                            <div>
                                                <Button variant="contained" sx={{ backgroundColor: '#244E3C', color: 'white', mt: 0 }} >
                                                <Link to="rspv-section" smooth={true} duration={800} >Yes, I'm in</Link>
                                                </Button>
                                            </div>
                                        </div>

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} className="grid-header">
                                        {/* <div className="photo-frame-responsive">
                                            <img src={PhotoWithFrame} alt="" />
                                        </div> */}
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

