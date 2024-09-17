import React from 'react';
import Grid from '@mui/material/Grid';
import { TextField, Button, Typography, Link } from '@mui/material';
import { WhatsApp, Phone, Home, Email } from '@mui/icons-material';
import './ContactUs.css';
import PageContainer from '../Custom/PageContainer/PageContainer';
import '../../index.css';

const ContactUs = () => {
    return (
        <div id='contact-section'>

            <PageContainer title="Contact Us">
                <Grid container justifyContent="space-around">
                    <Grid item xs={10} md={4}>
                        <div className="grid-header">
                            <h1>Send Your Wish</h1>
                        </div>
                        <div className="contact_gap">
                            <TextField label="Name" variant="outlined" margin="normal" fullWidth />
                            <TextField label="Subject" variant="outlined" margin="normal" fullWidth />
                            <TextField label="Message" variant="outlined" margin="normal" fullWidth multiline rows={4} />
                            <Button variant="contained" sx={{ backgroundColor: '#244E3C', color: 'white', mt: 2 }} fullWidth>
                                <WhatsApp /> &nbsp; Send
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={10} md={4} className="grid-header">
                        <div className="contact-container-section">
                            <h1>Contact</h1>
                            <div className="contact-item contact_gap">
                                <Typography variant="body1">
                                    <h4 style={{ display: 'flex' }}><Phone />&nbsp;<span>+91-9264268504</span></h4>
                                </Typography>
                                <Typography variant="body1">
                                    <h4 style={{ display: 'flex' }}><Home />&nbsp;<span>Indore, Madhya Pradesh 452010</span></h4>
                                </Typography>
                                <Typography variant="body1">
                                    <h4 style={{ display: 'flex' }}><Email />
                                        &nbsp;<Link href="mailto:theabhishekchoudhary01@gmail.com" underline="none">
                                            <span> abhishek@gmail.com</span>
                                        </Link>
                                    </h4>
                                </Typography>
                                <Typography variant="body1">
                                    <h4 style={{ display: 'flex' }}><WhatsApp />&nbsp;<span>+91-9264248504</span></h4>
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </PageContainer>
        </div>
    );
};

export default ContactUs;
