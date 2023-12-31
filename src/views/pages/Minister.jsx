import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../layouts/Landing/Footer';
import Header from '../../components/AppBar/Header';
const ministerData = [
    {
        imageSrc: '/img6.png',
        description: 'Our Ministry of Human Rights advocates for fairness,  justice, and dignity for all.Explore our initiatives in the Ministry of Human Rights, committed to upholding rights and well- being of every individual  Discover how our Ministry of Human Rights strives to create a world where everyone is treated with respect and compassion.',
        title: 'MINISTRY OF HUMAN RIGHTS'
    },
    {
        imageSrc: '/img7.png',
        description: 'Our Ministry of Housing & Work strives to provide stablehomes and meaningful employment opportunities. Explore how our Ministry of Housing & Work contributes to community well - being through housing solutions andemployment pathways.Discover the impact of our Ministry of Housing & Work in creating a foundation for growth.',
        title: 'MINISTRY OF HOUSING & WORK'
    },
    {
        imageSrc: '/img8.png',
        title: 'Women Ministry',
        description: 'Join our Women is Ministry for strength, support,and spiritual growth.Discover the unique contributions of women in our vibrant community.Find inspiration and connection in our Women is Ministry.',
    },
    {
        imageSrc: '/img6.png',
        description: 'Our Ministry of Human Rights advocates for fairness,  justice, and dignity for all.Explore our initiatives in the Ministry of Human Rights, committed to upholding rights and well- being of every individual  Discover how our Ministry of Human Rights strives to create a world where everyone is treated with respect and compassion.',
        title: 'MINISTRY OF HUMAN RIGHTS'
    },
    {
        imageSrc: '/img7.png',
        description: 'Our Ministry of Housing & Work strives to provide stablehomes and meaningful employment opportunities. Explore how our Ministry of Housing & Work contributes to community well - being through housing solutions andemployment pathways.Discover the impact of our Ministry of Housing & Work in creating a foundation for growth.',
        title: 'MINISTRY OF HOUSING & WORK'
    },
    {
        imageSrc: '/img8.png',
        title: 'Women Ministry',
        description: 'Join our Women is Ministry for strength, support,and spiritual growth.Discover the unique contributions of women in our vibrant community.Find inspiration and connection in our Women is Ministry.',
    },
    {
        imageSrc: '/img6.png',
        description: 'Our Ministry of Human Rights advocates for fairness,  justice, and dignity for all.Explore our initiatives in the Ministry of Human Rights, committed to upholding rights and well- being of every individual  Discover how our Ministry of Human Rights strives to create a world where everyone is treated with respect and compassion.',
        title: 'MINISTRY OF HUMAN RIGHTS'
    },
    {
        imageSrc: '/img7.png',
        description: 'Our Ministry of Housing & Work strives to provide stablehomes and meaningful employment opportunities. Explore how our Ministry of Housing & Work contributes to community well - being through housing solutions andemployment pathways.Discover the impact of our Ministry of Housing & Work in creating a foundation for growth.',
        title: 'MINISTRY OF HOUSING & WORK'
    },
    {
        imageSrc: '/img8.png',
        title: 'Women Ministry',
        description: 'Join our Women is Ministry for strength, support,and spiritual growth.Discover the unique contributions of women in our vibrant community.Find inspiration and connection in our Women is Ministry.',
    },

];
const Minister = () => {
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
                        backgroundImage: `url('/img15.png')`,
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
                        Our Ministries
                    </Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>Discover purposeful ministries at Shekinah Haitian SDA Church, where faith, community, and service come together.
                        From engaging youth programs to dynamic worship experiences, each ministry reflects our commitment to spiritual
                        growth and making a positive impact. Find your place to thrive, connect, and contribute within our diverse and
                        welcoming church family.
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ padding: "50px" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '32px', fontWeight: 700, textAlign: "start" }}>Our Ministries</Typography>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="Search...."
                            style={{
                                backgroundColor: '#fff',
                                color: 'gray',
                                borderRadius: '8px',
                                border: '1px solid gray',
                                padding: '10px 12px',
                                paddingRight: '60px',
                            }}
                        />
                        <button
                            style={{
                                position: 'absolute',
                                top: '37%',
                                right: '1px',
                                transform: 'translateY(-50%)',
                                backgroundColor: '#E10B0B',
                                border: 'none',
                                outline: 'none',
                                cursor: 'pointer',
                                borderRadius: '8px',
                                color: 'white',
                                padding: '10px 12px',

                            }}
                        >
                            Search
                        </button>
                    </div>
                </Box>

                <Grid container spacing={5} sx={{ padding: '50px 0px' }}>
                    {ministerData.map((val, ind) => (
                        <Grid key={ind} item lg={4} md={6} sm={12} xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0px 8px 6px 0px rgba(225, 11, 11, 0.50)',
                                    width: '100%',
                                    overflow: 'hidden',
                                    borderRadius: '16px',
                                    height: '100%',
                                    position: 'relative',

                                }}
                            >
                                <img
                                    src={val.imageSrc}
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                    alt="abc"
                                />
                                <Box sx={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'start' }}>{val.title}</Typography>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 400, textAlign: 'start' }}>{val.description}</Typography>
                                    </div>
                                    <div>
                                        <button style={{ backgroundColor: 'transparent', color: '#E10B0B', fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
                                    </div>
                                </Box>
                            </Box>


                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Footer />
        </>
    )
}

export default Minister