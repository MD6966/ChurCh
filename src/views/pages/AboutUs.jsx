import React from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer'
import { Box, Grid, Typography } from '@mui/material'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

import { Carousel } from 'primereact/carousel';
const product = [
    {
        name: 'moaz',
        image: 'img6.png',
        price: 'ahmad'
    },
    {
        name: 'moaz',
        image: 'img6.png',
        price: 'ahmad'
    },
    {
        name: 'moaz',
        image: 'img6.png',
        price: 'ahmad'
    },
    {
        name: 'moaz',
        image: 'img6.png',
        price: 'ahmad'
    },
]
const AboutUs = () => {
    return (
        <>
            <Header color='000' />
            <Box>
                <Box sx={{ padding: "30px 60px" }}>
                    <Grid container spacing={3}>
                        <Grid item lg={6}>
                            <Box
                                sx={{
                                    maxWidth: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src="/img4.png"
                                    alt=""
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "start",
                                    alignItems: "start",
                                    padding: "20px",
                                    gap: '15px'
                                }}
                            >
                                <Typography sx={{ fontSize: "20px", fontWeight: 600, color: '#E10B0B' }}>
                                    About us
                                </Typography>
                                <Typography sx={{
                                    textAlign: "start", fontSize: "22px", fontWeight: 800,
                                }}>
                                    Striving for a greener tomorrow, one small step at a time.
                                </Typography>
                                <Typography sx={{ textAlign: "start", fontSize: "16px", fontWeight: 400, fontColor: '#6A6868' }}>
                                    We extend a warm welcome to Shekinah Haitian SDA Church, where we joyfully share the transformative message of Jesus Christ with all who seek to listen.
                                </Typography>
                                <Typography sx={{ textAlign: "start", fontSize: "16px", fontWeight: 600, fontStyle: 'italic' }}>
                                    In the refuge of the Lord's name, the righteous find strength and safety, a steadfast tower in times of need.
                                </Typography>
                                <Grid container>
                                    <Grid item lg={6}>
                                        <Box>
                                            <Box sx={{ borderRadius: '50%', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                <Box sx={{ backgroundColor: '#E10B0B', height: '50px', width: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <FavoriteOutlinedIcon sx={{ color: 'white', }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Place of Heaven</Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{ textAlign: 'start', mt: 1, color: '#6A6868' }}>
                                                At Shekinah Haitian SDA Church, immerse
                                                yourself in a sanctuary of divinity, piety,
                                                goodness, and steadfast faith.
                                            </Typography>

                                        </Box>
                                    </Grid>
                                    <Grid item lg={6}>
                                        <Box>
                                            <Box sx={{ borderRadius: '50%', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                <Box sx={{ backgroundColor: '#E10B0B', height: '50px', width: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <LocalLibraryOutlinedIcon sx={{ color: 'white', }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Study Bible</Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{ textAlign: 'start', mt: 1, color: '#6A6868' }}>
                                                Explore profound knowledge and spiritual
                                                growth within the pages of our study Bible
                                                —a sacred journey of understanding and faith.
                                            </Typography>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box >
                {/* Slider */}

                <Box sx={{ padding: '30px 40px' }}>
                    <Typography sx={{ fontSize: '18px', color: '#E10B0B', textAlign: 'center', fontWeight: '550' }}>Our Team</Typography>
                    <Typography sx={{ fontSize: '28px', textAlign: 'center', fontWeight: '600', padding: '10px 0px' }}>Church Pastors</Typography>
                    <Carousel
                        value={product}
                        numVisible={3}
                        autoplayInterval={3000}
                        numScroll={3}
                        itemTemplate={productTemplate}
                        showNavigators

                    />

                </Box>


            </Box>
            <Footer />
        </>
    )
};
const productTemplate = (product) => {
    return (

        <Box sx={{
            border: '1px solid #ddd',
            margin: '40px 20px',
            textAlign: 'center',
            transition: 'transform 0.3s',  // Add a smooth transition effect

        }}>
            <Box >
                <img src={product.image} style={{
                    width: '100%', height: '60vh', objectFit: 'cover',
                }} alt={product.name} />
            </Box>
            <Box sx={{ padding: '15px 0px', backgroundColor: '#E10B0B', color: 'white', fontWeight: 600 }}>
                <Typography sx={{ fontWeight: 600, fontSize: '22px' }}>{product.name}</Typography>
                <Typography >${product.price}</Typography>
            </Box>
        </Box>
    );
};


export default AboutUs