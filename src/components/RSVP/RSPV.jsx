import React from 'react'
import Grid from '@mui/material/Grid';

import { TextField, Button } from '@mui/material';
import { Email } from '@mui/icons-material';
import PageContainer from '../Custom/PageContainer/PageContainer'
import Cake from '../../assests/cake.png'
import Ballons from '../../assests/ballons.png'
import './RSPV.css'

const RSPV = () => {

    return (
        <>
            <div id='rspv-section'>
                <PageContainer title='RSPV'>
                    <Grid container justifyContent="space-around" alignItems="center"  >
                        <Grid item xs={10} md={3} >
                            <div className="rspv-image-section">
                                <div className='rspv-image-section-inner'>
                                    <img src={Cake} alt="" />
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={10} md={4} >
                            <div className="grid-header">
                                <h1>Are You Attending?</h1>
                            </div>
                            <div className="contact_gap">
                                <TextField label="Name" variant="outlined" margin="normal" fullWidth />
                                <TextField label="Contact Number" variant="outlined" margin="normal" fullWidth />

                                <div className='dropdown-menu'>
                                    <select id="dropdown" className='dropdown-item'>
                                        <option value="">Number Of Guests</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>

                                <div className='dropdown-menu'>
                                    <select id="dropdown" className='dropdown-item'>
                                        <option value=""><em>Meal Prefrences</em></option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>

                                <Button variant="contained" sx={{ backgroundColor: '#244E3C', color: 'white', mt: 2 }} fullWidth>
                                    <Email /> &nbsp; Submit
                                </Button>

                            </div>
                        </Grid>
                        <Grid item xs={10} md={3} >

                            <div className="rspv-image-section">
                                <div className='rspv-image-section-inner'>
                                    <img src={Ballons} alt="" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </PageContainer>
            </div >
        </>
    )
}

export default RSPV