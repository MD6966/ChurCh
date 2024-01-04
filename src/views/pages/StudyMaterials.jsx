import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../../components/AppBar/Header';
import Footer from '../../layouts/Landing/Footer';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { getStudyMaterials } from '../../store/actions/userActions';

const StudyMaterials = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [studyMaterials, setStudyMaterials] = useState([])
    const getMaterials = () => {
        dispatch(getStudyMaterials())
            .then((result) => {
                console.log("========result", result.data.data);
                setStudyMaterials(result.data.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            });
    };

    useEffect(() => {
        getMaterials();
    }, []);
    const handleStudy = (data) => {
        const { id, title, description } = data;
        navigate('/study-intro', { state: { id, title, description } });

    }
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
                        backgroundImage: `url('/img26.png')`,
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

                    <Typography sx={{ fontSize: '32px', fontWeight: 600, }}>Study Materials
                    </Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}> Dive into our study materials for a meaningful exploration of faith and biblical wisdom.
                        Tailored for all levels of spiritual seekers, these resources offer insights and guidance
                        for personal and collective study, fostering growth and a deeper connection with God.
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ padding: "50px" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '32px', fontWeight: 700, textAlign: "start" }}>All Study Material</Typography>
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
                    {studyMaterials.map((val, ind) => (
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
                                        <button onClick={() => handleStudy(val)} style={{ backgroundColor: 'transparent', color: '#E10B0B', fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
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

export default StudyMaterials