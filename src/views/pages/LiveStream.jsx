import React from 'react'
import Header from '../../components/AppBar/Header'
import { Box, Grid, Typography } from '@mui/material'
import Footer from '../../layouts/Landing/Footer';
const data = [
    {
        imageSrc: "/img1.png",
        description:
            "Embark on a Heartwarming Journey this Sunday at our Magical Christmas Eve Service! Join us for an enchanting celebration filled cherished memories,uplifting carols, and the joyous spirit of community.Bring the whole family and immerse yourselves in the magic of Christmas, creating moments that will be treasured for years to come!.",
        buttonText: "Live 10:00 AM",
    },
    {
        imageSrc: "/img2.png",
        description:
            "Step into the enchanting embrace of Christmas magic this Sunday evening at our special celebration! Join us for a unique blend of joy, reflection, and the spirit of community, making this Christmas Eve an unforgettable experience for you and your loved ones.Together, let is create cherished memories, resonate with the beauty of carols, and revel in the warmth of the holiday season.",
        buttonText: "Live 11:00 PM",
    },
    {
        imageSrc: "/img1.png",
        description:
            "Embark on a Heartwarming Journey this Sunday at our Magical Christmas Eve Service! Join us for an enchanting celebration filled cherished memories,uplifting carols, and the joyous spirit of community.Bring the whole family and immerse yourselves in the magic of Christmas, creating moments that will be treasured for years to come!.",
        buttonText: "Live 10:00 AM",
    },
    {
        imageSrc: "/img2.png",
        description:
            "Step into the enchanting embrace of Christmas magic this Sunday evening at our special celebration! Join us for a unique blend of joy, reflection, and the spirit of community, making this Christmas Eve an unforgettable experience for you and your loved ones.Together, let is create cherished memories, resonate with the beauty of carols, and revel in the warmth of the holiday season.",
        buttonText: "Live 11:00 PM",
    },
];
const LiveStream = () => {
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
                        backgroundImage: `url('/img30.png')`,
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
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        zIndex: 0,
                    }}
                />


                <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                    <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
                        Join Our Worship Online
                    </Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
                        Experience the joy of worship from anywhere with our live streaming services. Join our online community
                        for a spiritually uplifting and immersive worship experience. Connect with us in real-time as we come
                        together to celebrate faith, fellowship, and the transformative power of community.
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ padding: '70px' }}>
                <video width="100%" height="500" controls>
                    <source src="URL_FOR_VIDEO_10" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "40px",

                    gap: "40px",
                }}
            >
                <Typography sx={{ fontSize: "32px", fontWeight: 800, textAlign: 'start' }}>
                    Our Last Events
                </Typography>
                <Grid container spacing={5}>
                    {data.map((val, ind) => (
                        <Grid key={ind} item lg={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 8px 6px 0px rgba(225, 11, 11, 0.50)",
                                    width: "100%",
                                    overflow: "hidden",
                                    borderRadius: "16px",
                                    height: "90vh",
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={val.imageSrc}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        maxHeight: "50vh",
                                        objectFit: "cover",
                                    }}
                                    alt="abc"
                                />
                                <Box
                                    sx={{
                                        padding: "15px",
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                            textAlign: "start",
                                        }}
                                    >
                                        {val.description}
                                    </Typography>
                                    <div>
                                        <button
                                            style={{
                                                backgroundColor: "transparent",
                                                color: "black",
                                                fontSize: "18px",
                                                borderRadius: "8px",
                                                padding: "10px",
                                                border: "1px solid #E10B0B",
                                                marginTop: "10px",
                                            }}
                                        >
                                            {val.buttonText}
                                        </button>
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

export default LiveStream