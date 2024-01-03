import React, { useState } from 'react'
import Header from '../../components/AppBar/Header'
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../layouts/Landing/Footer';
const StudyIntro = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
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
                        Introduction to Bible
                    </Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
                        Embark on a transformative journey with the Bible—an ancient and sacred text that serves as a guide for spiritual growth,
                        wisdom, and understanding. In its pages, discover the timeless stories, teachings, and principles that continue to inspire
                        and shape the lives of millions. Whether you are exploring the Bible for the first time or seeking deeper insights, this
                        introduction invites you to unlock the profound wisdom and eternal truths within its verses.
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography sx={{ fontSize: '26px', fontWeight: 700, textAlign: 'start' }}>Introduction to Bible</Typography>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What is Bible</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            <video width="100%" height="250" controls>
                                <source src="URL_FOR_VIDEO_10" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>The purpose of the Bible</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>How to study the Bible</Typography>
                        </AccordionSummary>
                    </Accordion>
                </div>
            </Box>
            <Footer />
        </>
    )
}

export default StudyIntro