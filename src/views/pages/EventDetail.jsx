import React from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer'
import { Box, Divider, Grid, Typography } from '@mui/material'

const Imgs = [
    { imgSrc: 'img6.png' },
    { imgSrc: 'img6.png' },
    { imgSrc: 'img6.png' },
    { imgSrc: 'img6.png' },
    { imgSrc: 'img6.png' },
    { imgSrc: 'img6.png' },
]
const eventDetail = [
    {
        title: 'Organizer:',
        description: 'Zegen Church Team'
    },
    {
        title: 'start Date:',
        description: 'Feb 12'
    },
    {
        title: 'End Date:',
        description: 'Feb 12'
    },
    {
        title: 'Time:',
        description: '7:00 am'
    },
    {
        title: 'Cost:',
        description: 'Free'
    },
]
const EventVanue = [
    {
        title: 'Venue:',
        description: 'Zegen Church'
    },
    {
        title: 'Address:',
        description: '12, Victoria Street, Australia'
    },
    {
        title: 'E-mail : ',
        description: 'zegen@admin.com'
    },
    {
        title: 'Phone :',
        description: '+1 (541) 754-3010'
    },
    {
        title: 'Website : ',
        description: 'https://zozothemes.com/'
    },
]

const EventDetail = () => {
    return (
        <>
            <Box >
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
                            Upcoming Events
                        </Typography>
                        <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>Upcoming event
                        </Typography>

                    </Box>

                </Box>
                <Box sx={{ padding: '20px 70px' }}>
                    <Box sx={{ padding: '20px 0px' }}>
                        <img src="img6.png" style={{ width: '100%', height: '80vh', objectFit: 'cover' }} alt="eventImg" />
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item lg={8}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt quae unde, cumque iusto repellat distinctio esse modi dicta earum error corporis recusandae animi neque nulla ratione architecto molestiae cum vel? Adipisci, consequuntur.</Typography>
                                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: '#E10B0B' }}>Event Description</Typography>
                                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, quod excepturi. Doloribus nisi facere deleniti aliquam ipsum impedit magni fuga eveniet eos.</Typography>
                                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: '#E10B0B' }}>Event Gallery</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: "20px", borderRadius: '10px' }}>
                                    {Imgs.map((val, ind) => (
                                        <img src={val.imgSrc} style={{ height: '20vh', borderRadius: '10px', }} alt="" />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4}>
                            <Box sx={{ padding: '20px' }}>
                                <Box sx={{ border: '1px solid gray', borderRadius: '10px 10px 0 0' }}>

                                    <Typography sx={{ fontSize: '22px', fontWeight: 600, color: 'white', backgroundColor: '#E10B0B', textAlign: 'center', borderRadius: '10px 10px 0 0', padding: '12px 0px' }}>
                                        Event Detail
                                    </Typography>
                                    <Box sx={{ padding: '20px 20px' }}>
                                        {eventDetail.map((val, ind) => (
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>

                                                <Typography sx={{ fontSize: '18px', fontWeight: 600 }}> {val.title}</Typography>
                                                <Typography>{val.description}</Typography>

                                            </Box>
                                        ))}

                                    </Box>
                                </Box>
                                <Box sx={{ border: '1px solid gray', borderRadius:'0 0 10px 10px'}}>

                                    <Typography sx={{ fontSize: '22px', fontWeight: 600, color: 'white', backgroundColor: '#E10B0B', textAlign: 'center', padding: '12px 0px' }}>
                                        Event Venue
                                    </Typography>
                                    <Box sx={{ padding: '20px 20px' }}>
                                        {EventVanue.map((val, ind) => (
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>

                                                <Typography sx={{ fontSize: '18px', fontWeight: 600 }}> {val.title}</Typography>
                                                <Typography>{val.description}</Typography>

                                            </Box>
                                        ))}

                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ padding: '50px' }}>
                    <img src="img24.png" alt="" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Box >
            <Footer />
        </>
    )
}

export default EventDetail