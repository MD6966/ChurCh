import React, { useEffect, useState } from 'react'
import Footer from '../../layouts/Landing/Footer'
import { Box, Button, Divider, Grid, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import Header from '../../components/AppBar/Header'
import { useDispatch } from 'react-redux'
import { getlastEvents } from '../../store/actions/userActions'
import { useLocation, useNavigate } from 'react-router'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'


const Imgs = [
    {}

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
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const [formRequest, setFormRequest] = useState([]);
    const dispatch = useDispatch()
    const [showEvent, setshowEvent] = useState([])
    const getAllEvents = () => {
        dispatch(getlastEvents())
            .then((result) => {
                // console.log("This is result", result.data.data[0]?.Image.url[0]?.url);
                setshowEvent(result.data.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            });
    };

    useEffect(() => {
        getAllEvents();
    }, []);
    const navigate = useNavigate();
    const { state } = useLocation()
    // console.log(state, 'this is state')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        selectOption: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <>
            <Header />
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


                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: isSmall ? '30px' : isMedium ? '50px' : "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                        <Typography sx={{ fontSize: isSmall ? '27px' : '32px', fontWeight: 600 }}>
                            {state.title}
                        </Typography>
                        <Typography sx={{
                            fontSize: '20px', fontWeight: 400, textAlign: 'center', display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            WebkitLineClamp: 3,
                        }}>{state.description}
                        </Typography>

                    </Box>

                </Box>
                <Box sx={{ padding: isSmall ? '30px' : isMedium ? '50px' : '20px 70px' }}>

                    <Box sx={{ padding: '20px 0px' }}>
                        <img src={state.Image.url[1]?.url} style={{ width: '100%', height: '80vh', objectFit: 'cover' }} alt="eventImg" />
                    </Box>

                    <Grid container spacing={3}>

                        <Grid item lg={8} sm={12} xs={12} md={12}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: '#E10B0B' }}>Event Title</Typography>
                                <Typography>{state.title}</Typography>
                                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: '#E10B0B' }}>Event Description</Typography>
                                <Typography>{state.description}</Typography>
                                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: '#E10B0B' }}>Event Gallery</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: "20px", borderRadius: '10px' }}>

                                    <Grid container spacing={3}>

                                        {state.Image.url.map((url, index) => (
                                            <Grid item lg={4} sm={12} xs={12} md={6} key={index}>
                                                <img src={url?.url} style={{ height: '30vh', width: '100%', borderRadius: '10px', objectFit: 'cover' }} alt={`eventImg-${index}`} />
                                            </Grid>
                                        ))}


                                    </Grid>


                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={4} sm={12} xs={12} md={12}>
                            <Box sx={{ padding: isSmall ? '0px' : '20px', }}>
                                <Box sx={{ border: '1px solid gray', borderRadius: '10px 10px 0 0' }}>

                                    <Typography sx={{ fontSize: '22px', fontWeight: 600, color: 'white', backgroundColor: '#E10B0B', textAlign: 'center', borderRadius: '10px 10px 0 0', padding: '12px 0px' }}>
                                        Event Detail
                                    </Typography>
                                    <Box sx={{ padding: '20px 20px' }}>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Organizer:</Typography>
                                            <Typography>{state.organizer}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>start Date:</Typography>
                                            <Typography>{moment(state.date_time).format("MMM Do YY")}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}> Time:</Typography>
                                            <Typography>{moment(state.date_time).format("h:mm:ss a")}</Typography>
                                        </Box>



                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}> Cost:</Typography>
                                            <Typography>{state.cost}</Typography>
                                        </Box>


                                    </Box>
                                </Box>
                                <Box sx={{ border: '1px solid gray', borderBottom: 'none' }}>

                                    <Typography sx={{ fontSize: '22px', fontWeight: 600, color: 'white', backgroundColor: '#E10B0B', textAlign: 'center', padding: '12px 0px' }}>
                                        Event Venue
                                    </Typography>
                                    <Box sx={{ padding: '20px 20px' }}>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Venue:</Typography>
                                            <Typography>{state.venue}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Address:</Typography>
                                            <Typography>{state.address}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600, }}>E-mail :</Typography>
                                            <Typography sx={{ overflow: 'hidden' }}>{state.email}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Phone :</Typography>
                                            <Typography>{state.phone}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '20px 0px', flexWrap: 'wrap', overflow: 'hidden' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Website:</Typography>
                                            <Link sx={{ wordWrap: 'break-word', overflow: 'hidden' }}>{state.website}</Link>
                                        </Box>

                                    </Box>
                                </Box>
                                <Box sx={{ border: '1px solid gray', borderRadius: '0 0 10px 10px' }}>

                                    <Typography sx={{ fontSize: '22px', fontWeight: 600, color: 'white', backgroundColor: '#E10B0B', textAlign: 'center', padding: '12px 0px' }}>
                                        Event Registration
                                    </Typography>
                                    <Box sx={{ padding: '20px 20px' }}>
                                        <Box>
                                            <form onSubmit={handleSubmit}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
                                                    <TextField
                                                        label="Name"
                                                        variant="outlined"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        margin="normal"
                                                    />
                                                    <TextField
                                                        label="Email"
                                                        variant="outlined"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        margin="normal"
                                                    />
                                                    <TextField
                                                        label="Phone"
                                                        variant="outlined"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        margin="normal"
                                                    />
                                                    <InputLabel id="select-label">Select Option</InputLabel>
                                                    <Select
                                                        labelId="select-label"
                                                        id="select"
                                                        name="selectOption"
                                                        value={formData.selectOption}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        margin="normal"
                                                    >
                                                        <MenuItem value="option1">Option 1</MenuItem>
                                                        <MenuItem value="option2">Option 2</MenuItem>
                                                        <MenuItem value="option3">Option 3</MenuItem>
                                                    </Select>

                                                </Box>
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0px' }}>
                                                    <button
                                                        type='submit'
                                                        style={{
                                                            backgroundColor: "#E10B0B",
                                                            color: "white",
                                                            fontSize: "16px",
                                                            borderRadius: "8px",
                                                            padding: "10px 20px",
                                                            border: "none",

                                                        }}

                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </Box>


                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid >


                </Box >
                <Box sx={{ padding: isSmall ? '30px' : '50px' }}>
                    <img src="img24.png" alt="" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Box >
            <Footer />
        </>
    )
}

export default EventDetail