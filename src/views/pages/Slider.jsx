import React, { useEffect, useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Box, Typography } from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { useDispatch } from 'react-redux';
import { getlastEvents } from '../../store/actions/userActions';
import { useNavigate } from 'react-router';
const events = [
    {
        title: 'Purposeful Living',
        description:
            'Embark on a Heartwarming Journey this Sunday at 10.00am at our Magical Christmas Eve.',
        time: 'Sunday at 10.00am',
    },
    {
        title: 'Purposeful Living',
        description:
            'Embark on a Heartwarming Journey this Sunday at 10.00am at our Magical Christmas Eve.',
        time: 'Sunday at 10.00am',
    },
    {
        title: 'Purposeful Living',
        description:
            'Embark on a Heartwarming Journey this Sunday at 10.00am at our Magical Christmas Eve.',
        time: 'Sunday at 10.00am',
    },

];

const Slider = () => {
    const dispatch = useDispatch()
    const [showEvent, setshowEvent] = useState([])
    const getAllEvents = () => {
        dispatch(getlastEvents())
            .then((result) => {
                console.log("This is result", result);
                setshowEvent(result.data.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            });
    };

    useEffect(() => {
        getAllEvents();
    }, []);
    const navigate = useNavigate()
    const handleBtn = () => {
        navigate('/live-stream')
    }
    const testimonialTemplate = (showEvent) => {
        return (
            <Card>
                <Box sx={{ color: 'black', padding: '0px 30px', }}>


                    <Box sx={{ display: 'flex', gap: '30px', padding: '20px', borderRadius: '8px', border: '1px solid #DBD5D5', backgroundColor: 'white', height: '100%' }}>
                        <RoomOutlinedIcon sx={{ color: '#E10B0B', fontSize: '3rem' }} />

                        <Box sx={{ textAlign: "start" }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>{showEvent.title}</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>Embark on a Heartwarming Journey this<span style={{ color: '#E10B0B', fontWeight: 700 }}> {showEvent.date_time
                            } </span> at our{showEvent.location} </Typography>
                            <button onClick={handleBtn} style={{ fontSize: '16px', fontWeight: 700, color: '#E10B0B', border: 'none', backgroundColor: 'white', cursor: 'pointer' }}>See Event Detail</button>
                        </Box>
                    </Box>
                </Box>
            </Card >
        );
    };

    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Carousel
                value={showEvent}
                itemTemplate={testimonialTemplate}
                numVisible={2} // Display two slides at a time
                numScroll={1} // Scroll one slide at a time
                autoplayInterval={3000} // Adjust the autoplay interval if needed
                circular
                autoplay
                indicators={true}
            />
        </div>
    );
};

export default Slider;
