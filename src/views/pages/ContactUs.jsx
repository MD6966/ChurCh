import React from 'react'
import Header from '../../components/AppBar/Header'
import { Box, Grid, InputAdornment, TextField, TextareaAutosize, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from '../../layouts/Landing/Footer';

const ContactUs = () => {
    return (
        <>
            <Header />
            <Box
                sx={{
                    position: 'relative',
                    minHeight: '400px',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url('/img13.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -1,
                    },
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.70)',
                        zIndex: 0,
                    }}
                />


                <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                    <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
                        Contact Us
                    </Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
                        Reach out to Shekinah Haitian SDA Church through our 'Contact Us' page. Find our contact
                        details, including address and phone number, and use the convenient form for inquiries or
                        prayer requests. We're here to connect and support you on your journey of faith.
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ padding: '50px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, textAlign: 'start' }}>Contact Us</Typography>
                <Grid container spacing={5}>
                    <Grid item lg={5}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: "40px", marginTop: '30px' }}>
                            <input type="text" placeholder="Write Your Name" style={{ border: 'none', backgroundColor: '#EDE8E8', color: 'gray', padding: ' 15px 20px', borderRadius: '8px' }} />
                            <input type="text" placeholder="Write Your Email" style={{ border: 'none', backgroundColor: '#EDE8E8', color: 'gray', padding: ' 15px 20px', borderRadius: '8px' }} />
                            <input type="text" placeholder="Write Your Phone Number" style={{ border: 'none', backgroundColor: '#EDE8E8', color: 'gray', padding: ' 15px 20px', borderRadius: '8px' }} />
                            <textarea
                                placeholder="Write Your Message"
                                style={{ border: 'none', backgroundColor: '#EDE8E8', color: 'gray', padding: '15px 20px', borderRadius: '8px' }}
                            ></textarea>
                            <div>
                                <button style={{ backgroundColor: '#E10B0B', color: 'white', fontSize: '24px', borderRadius: '8px', padding: '10px 40px', border: 'none', }}>Contact Us</button>
                            </div>
                        </Box>
                    </Grid>

                    <Grid item lg={7}>
                        <Box sx={{ maxWidth: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src="/img14.png"
                                alt=""
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box >
            <Footer />
        </>
    )
}

export default ContactUs