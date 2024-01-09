import { AppBar, Box, Button, Grid, Toolbar, Typography, useTheme } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom/dist";
import Body from "./Body";
import NavBarLinks from "./NavBarLinks";
import Page from "../../components/page/page";
import Nav from "../../components/AppBar/Header";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Footer from "./Footer";
import LandingContent from "./LandingContent";
import { useLandingStyle } from "./styles";
import { Text } from "../../components/base";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Divider } from 'primereact/divider';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slider from "../../views/pages/Slider";
// const events = [
//   {
//     title: 'Purposeful Living',
//     description:
//       'Embark on a Heartwarming Journey this Sunday at 10.00am at our Magical Christmas Eve.',
//     time: 'Sunday at 10.00am',
//   },
//   {
//     title: 'Purposeful Living',
//     description:
//       'Embark on a Heartwarming Journey this Sunday at 10.00am at our Magical Christmas Eve.',
//     time: 'Sunday at 10.00am',
//   },

// ];
const Landing = () => {
  const theme = useTheme();

  const navigate = useNavigate()

  return (
    <Page title="Welcome To Website">
      <AppBar elevation={0} sx={{ backgroundColor: 'transparent', }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>

          {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "10px", fontSize: '20px', }}>
            <RoomOutlinedIcon sx={{ fontSize: '20px' }} />
            <Typography> 3700 W. Risinger Rd Fort Worth, TX 76123
            </Typography>
          </Box> */}
          <Box>
            <img
              src="img39.png"
              style={{
                objectFit: "cover",
                height: '50px',
                width: '100%'
              }}
              alt="Logo"
            />
          </Box>
          <Box sx={{ display: 'flex', gap: "30px", paddingRight: '50px' }}>

            <a href="https://www.facebook.com/shekinahsda" target="_blank" rel="noopener noreferrer">
              <FacebookOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
            </a>
            <Divider layout="vertical" />
            <InstagramIcon sx={{ fontSize: '20px' }} />
            <Divider layout="vertical" />
            <TwitterIcon sx={{ fontSize: '20px' }} />
            <Divider layout="vertical" />
            <SearchOutlinedIcon sx={{ fontSize: '20px' }} />

          </Box>
        </Toolbar>
      </AppBar>
      {/* <AppBar sx={{ position: 'fixed', mt: 5 }}>
        <Toolbar>
          This is Apppbar
        </Toolbar>
      </AppBar> */}
      <Nav position='fixed' mt={7} />
      <Box
        sx={{
          position: "relative",
          // minHeight: "700px",
          minHeight: "100vh",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -120,
            left: 0,
            width: "100%",
            height: "110vh",
            backgroundImage: `url('/main.png')`,
            // backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,

          },
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -70,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(10, 28, 50, 0.80)",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            padding: { xs: "5px", sm: "0px 200px" },
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '90px',
            zIndex: 1,
            // mb: 8
          }}
        >
          <Typography sx={{ color: '#E10B0B', fontSize: '24px', fontWeight: 700, }}>A Sanctuary of Faith and Community</Typography>
          <Text sx={{ fontSize: { xs: "16px", sm: "32px" }, fontWeight: 600 }}>

            A Place of Worship, Community, and Spiritual Growth.
          </Text>
          <Text
            sx={{
              fontSize: { xs: "16px", sm: "20px" },
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {" "}
            {/* Ensure text is on top */}
            Shekinah Haitian SDA Church: A vibrant community fostering spiritual growth. Join us for a journey of faith, fellowship, and transformation.
          </Text>
          <button
            onClick={() => navigate('/live-stream')}
            style={{
              backgroundColor: "#E10B0B",
              color: "white",
              fontSize: '22px',
              // fontSize: { xs: "20px", sm: "24px", lg: '24px' },
              borderRadius: "8px",
              padding: "10px 12px",
              border: "none",
            }}
          >
            Watch Live Sunday
          </button>
        </Box>
        {/* <Box sx={{ color: 'black', position: 'absolute', bottom: '20px', padding: '0px 30px' }}>
          <Grid container spacing={5}>
            {events.map((val, ind) => (
              <Grid item lg={6} >
                <Box sx={{ display: 'flex', gap: '30px', padding: '20px', borderRadius: '8px', border: '1px solid #DBD5D5', backgroundColor: 'white', }}>
                  <RoomOutlinedIcon sx={{ color: '#E10B0B', fontSize: '3rem' }} />

                  <Box sx={{ textAlign: "start" }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Purposeful Living</Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>Embark on a Heartwarming Journey this <span style={{ color: '#E10B0B', fontWeight: 700 }}> Sunday at 10.00am </span> at our Magical Christmas Eve. </Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#E10B0B' }}>See Event Detail</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}


          </Grid>
        </Box> */}
        <Slider />
      </Box>

      <LandingContent />
      <Footer />
    </Page >

  );
};

export default Landing;
