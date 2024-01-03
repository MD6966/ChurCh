import { Box, Grid, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../../components/AppBar/Header";
import Footer from "../../../layouts/Landing/Footer";
import { getAllBlogs } from "../../../store/actions/blogActions";
import { useDispatch } from "react-redux";
import { Text } from "../../../components/base";
import PublicNews from "./molecules/PublicNews";

// const blogData = [
//   {
//     imageSrc: "/img9.png",
//     description:
//       "Explore personal stories of faith, challenges,and triumphs within our community.",
//     title: "Faith Journeys",
//   },
//   {
//     imageSrc: "/img10.png",
//     description:
//       "Shine a light on the diverse and inspiring members of our church family.",
//     title: "Community Spotlight",
//   },
//   {
//     imageSrc: "/img11.png",
//     title: "Sunday Sermons",
//     description:
//       "Access summaries or key takeaways from our impactful Sunday sermons.",
//   },
//   {
//     imageSrc: "/img9.png",
//     description:
//       "Explore personal stories of faith, challenges,and triumphs within our community.",
//     title: "Faith Journeys",
//   },
//   {
//     imageSrc: "/img10.png",
//     description:
//       "Shine a light on the diverse and inspiring members of our church family.",
//     title: "Community Spotlight",
//   },
//   {
//     imageSrc: "/img11.png",
//     title: "Sunday Sermons",
//     description:
//       "Access summaries or key takeaways from our impactful Sunday sermons.",
//   },
//   {
//     imageSrc: "/img9.png",
//     description:
//       "Explore personal stories of faith, challenges,and triumphs within our community.",
//     title: "Faith Journeys",
//   },
//   {
//     imageSrc: "/img10.png",
//     description:
//       "Shine a light on the diverse and inspiring members of our church family.",
//     title: "Community Spotlight",
//   },
//   {
//     imageSrc: "/img11.png",
//     title: "Sunday Sermons",
//     description:
//       "Access summaries or key takeaways from our impactful Sunday sermons.",
//   },
// ];

const categories = ["Our Latest Blog", "Inspirational message", "Public News"];

const Blog = () => {
  const [showData, setShowData] = useState({
    blog: false,
    message: false,
    news: false,
  });
  const [blogData, setBlogData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs())
      .then((result) => {
        // console.log("========result", result?.data?.payload?.all);
        setBlogData(result?.data?.payload?.all);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      });
  }, [setBlogData, dispatch]);

  // console.log("========blogData=====", blogData);
  return (
    <>
      <Header />
      {/* <Box>
        <Box
          sx={{
            position: "relative",
            minHeight: "400px",
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
              padding: "0px 200px",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <Text>Blog</Text>
          </Box>
        </Box>
        <Box sx={{ padding: "50px" }}>
          <Stack
            flexDirection="row"
            justifyContent={"space-between"}
            sx={{ cursor: "pointer" }}
          >
            {categories.map((category, index) => (
              <Text
                key={index}
                sx={{
                  fontSize: { xs: "22px", md: "28px", lg: "32px" },
                  fontWeight: 700,
                  textAlign: "start",
                }}
              >
                {category}
              </Text>
            ))}
          </Stack>

          <Grid container spacing={5} sx={{ padding: "50px 0px" }}>
            {blogData?.map((val, ind) => (
              <Grid key={ind} item lg={4}>
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
                    height: "75vh",
                    position: "relative",
                  }}
                >
                  <img
                    src={val.imageSrc}
                    style={{
                      width: "100%",
                      height: "auto",
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
                    <div>
                      <Text
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          textAlign: "start",
                        }}
                      >
                        {val.title}
                      </Text>
                      <Text
                        sx={{
                          fontSize: "16px",
                          fontWeight: 400,
                          textAlign: "start",
                        }}
                      >
                        {val.description}
                      </Text>
                    </div>
                    <div>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          color: "#E10B0B",
                          fontSize: "18px",
                          borderRadius: "8px",
                          padding: "10px",
                          fontWeight: 600,
                          border: "none",
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box> */}
      {<PublicNews />}
      <Footer />
    </>
  );
};

export default Blog;
