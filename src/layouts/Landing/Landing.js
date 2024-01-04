import { Box, useTheme } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom/dist";
import Body from "./Body";
import NavBarLinks from "./NavBarLinks";
import Page from "../../components/page/page";
import Nav from "../../components/AppBar/Header";

import Footer from "./Footer";
import LandingContent from "./LandingContent";
import { useLandingStyle } from "./styles";
import { Text } from "../../components/base";

const Landing = () => {
  const theme = useTheme();
  const styles = useLandingStyle({ theme });
  const navigate = useNavigate()
  return (
    <Page title="Welcome To Website">
      <Nav />
      <Box
        sx={{
          position: "relative",
          minHeight: "505px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('/main.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.70)",
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
            zIndex: 1,
          }}
        >
          <Text sx={{ fontSize: { xs: "16px", sm: "32px" }, fontWeight: 600 }}>
            {" "}
            {/* Ensure text is on top */}
            YA Place of Worship, Community, and Spiritual Growth.
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
            Discover a sanctuary where faith comes alive – Shekinah Haitian SDA
            Church is more than Here a place of worship; it's a vibrant
            community dedicated to fostering spiritual growth and connection.
            Join us on a journey of faith, fellowship, and transformation.
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
      </Box>
      <LandingContent />
      <Footer />
    </Page>
  );
};

export default Landing;
