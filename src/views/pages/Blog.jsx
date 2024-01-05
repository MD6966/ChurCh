import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer';
const blogData = [
    {
        imageSrc: '/img9.png',
        description: 'Explore personal stories of faith, challenges,and triumphs within our community.',
        title: 'Faith Journeys'
    },
    {
        imageSrc: '/img10.png',
        description: 'Shine a light on the diverse and inspiring members of our church family.',
        title: 'Community Spotlight'
    },
    {
        imageSrc: '/img11.png',
        title: 'Sunday Sermons',
        description: 'Access summaries or key takeaways from our impactful Sunday sermons.',
    },
    {
        imageSrc: '/img9.png',
        description: 'Explore personal stories of faith, challenges,and triumphs within our community.',
        title: 'Faith Journeys'
    },
    {
        imageSrc: '/img10.png',
        description: 'Shine a light on the diverse and inspiring members of our church family.',
        title: 'Community Spotlight'
    },
    {
        imageSrc: '/img11.png',
        title: 'Sunday Sermons',
        description: 'Access summaries or key takeaways from our impactful Sunday sermons.',
    },
    {
        imageSrc: '/img9.png',
        description: 'Explore personal stories of faith, challenges,and triumphs within our community.',
        title: 'Faith Journeys'
    },
    {
        imageSrc: '/img10.png',
        description: 'Shine a light on the diverse and inspiring members of our church family.',
        title: 'Community Spotlight'
    },
    {
        imageSrc: '/img11.png',
        title: 'Sunday Sermons',
        description: 'Access summaries or key takeaways from our impactful Sunday sermons.',
    },

];
const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Box>
                <Box
                    sx={{
                        position: 'relative',
                        minHeight: '400px',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -70,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url('/img32.png')`,
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
                            top: -70,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            zIndex: 0,
                        }}
                    />


                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                        <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
                            BLOGS
                        </Typography>
                        <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
                            Explore our thought-provoking blogs, where we share inspirational stories, reflections
                            on faith, and updates on community events. Dive into a rich tapestry of content that
                            aims to uplift, inspire, and foster a sense of connection within our church family.
                        </Typography>

                    </Box>
                </Box>
                <Box sx={{ padding: "50px" }}>
                    <Typography sx={{ fontSize: '36px', fontWeight: 700, textAlign: "start" }}>Our Latest Blogs</Typography>
                    <Grid container spacing={5} sx={{ padding: '50px 0px' }}>
                        {blogData.map((val, ind) => (
                            <Grid key={ind} item lg={4}>
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
                                        height: '75vh',
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
            </Box>
            <Footer />
        </>
    )
}

export default Blog