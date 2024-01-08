import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Box, Typography } from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
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
    const testimonialTemplate = (events) => {
        return (
            <Card>
                <Box sx={{ color: 'black', padding: '0px 30px', }}>


                    <Box sx={{ display: 'flex', gap: '30px', padding: '20px', borderRadius: '8px', border: '1px solid #DBD5D5', backgroundColor: 'white', }}>
                        <RoomOutlinedIcon sx={{ color: '#E10B0B', fontSize: '3rem' }} />

                        <Box sx={{ textAlign: "start" }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>{events.title}</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{events.description}<span style={{ color: '#E10B0B', fontWeight: 700 }}> Sunday at 10.00am </span> at our Magical Christmas Eve. </Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#E10B0B' }}>See Event Detail</Typography>
                        </Box>
                    </Box>
                </Box>
            </Card >
        );
    };

    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Carousel
                value={events}
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
