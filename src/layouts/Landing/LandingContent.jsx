import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router";
const data = [
  {
    imageSrc: "/img1.png",
    description:
      "Embark on a Heartwarming Journey this Sunday at our Magical Christmas Eve Service! Join us for an enchanting celebration filled cherished memories,uplifting carols, and the joyous spirit of community.Bring the whole family and immerse yourselves in the magic of Christmas, creating moments that will be treasured for years to come!.",
    buttonText: "Live 10:00 AM",
  },
  {
    imageSrc: "/img2.png",
    description:
      "Step into the enchanting embrace of Christmas magic this Sunday evening at our special celebration! Join us for a unique blend of joy, reflection, and the spirit of community, making this Christmas Eve an unforgettable experience for you and your loved ones.Together, let is create cherished memories, resonate with the beauty of carols, and revel in the warmth of the holiday season.",
    buttonText: "Live 11:00 PM",
  },
];
const data1 = [
  {
    imageSrc: "/img6.png",
    description:
      "Our Ministry of Human Rights advocates for fairness,  justice, and dignity for all.Explore our initiatives in the Ministry of Human Rights, committed to upholding rights and well- being of every individual  Discover how our Ministry of Human Rights strives to create a world where everyone is treated with respect and compassion.",
    title: "MINISTRY OF HUMAN RIGHTS",
  },
  {
    imageSrc: "/img7.png",
    description:
      "Our Ministry of Housing & Work strives to provide stablehomes and meaningful employment opportunities. Explore how our Ministry of Housing & Work contributes to community well - being through housing solutions andemployment pathways.Discover the impact of our Ministry of Housing & Work in creating a foundation for growth.",
    title: "MINISTRY OF HOUSING & WORK",
  },
  {
    imageSrc: "/img8.png",
    title: "Women Ministry",
    description:
      "Join our Women is Ministry for strength, support,and spiritual growth.Discover the unique contributions of women in our vibrant community.Find inspiration and connection in our Women is Ministry.",
  },
];
const blogData = [
  {
    imageSrc: "/img9.png",
    description:
      "Explore personal stories of faith, challenges,and triumphs within our community.",
    title: "Faith Journeys",
  },
  {
    imageSrc: "/img10.png",
    description:
      "Shine a light on the diverse and inspiring members of our church family.",
    title: "Community Spotlight",
  },
  {
    imageSrc: "/img11.png",
    title: "Sunday Sermons",
    description:
      "Access summaries or key takeaways from our impactful Sunday sermons.",
  },
];
const materialData = [
  {
    imageSrc: '/img20.png',
    description: 'The Bible is a sacred text in Christianity, divided into the Old and New Testaments.It is considered the inspired word of God, offering guidance, wisdom, and spiritual insight to believers.',
    title: 'Introduction to the Bible'
  },
  {
    imageSrc: '/img21.png',
    description: 'Biblical teachings emphasize the sacred nature of family and marriage, rooted in love, commitment, and mutual respect.The covenant of marriage reflects the profound connection between Christ and His Church, guiding us to build strong, God centered families for a life of faith and shared purpose.',
    title: 'Family and Marriage'
  },
  {
    imageSrc: '/img22.png',
    title: 'Sermon on the Mount',
    description: 'Delve into the Sermon on the Mount, a powerful collection of teachings by Jesus found in Matthew is Gospel.These timeless lessons illuminate the path to true happiness emphasizing compassion and humility.',
  },
];
const LandingContent = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Typography sx={{ fontSize: "32px", fontWeight: 800 }}>
          CURRENT EVENTS UNFOLDING
        </Typography>
        <Grid container spacing={5}>
          {data.map((val, ind) => (
            <Grid key={ind} item lg={6}>
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
                  height: "90vh",
                  position: "relative",
                }}
              >
                <img
                  src={val.imageSrc}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "50vh",
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
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      textAlign: "start",
                    }}
                  >
                    {val.description}
                  </Typography>
                  <div>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        fontSize: "18px",
                        borderRadius: "8px",
                        padding: "10px",
                        border: "1px solid #E10B0B",
                        marginTop: "10px",
                      }}
                    >
                      {val.buttonText}
                    </button>
                  </div>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <button
          style={{
            backgroundColor: "#E10B0B",
            color: "white",
            fontSize: "24px",
            borderRadius: "8px",
            padding: "10px 12px",
            border: "none",
          }}
          onClick={() => navigate('/live-stream')}
        >
          View All Events
        </button>
      </Box>
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
            backgroundImage: `url('/img3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          },
          position: "relative",
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
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
            {" "}
            {/* Ensure text is on top */}
            Prayer Partnerships for Spiritual Connection
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 400, textAlign: "center" }}
          >
            Engage in Prayer, Listen to God's Voice! While you can seek this
            sacred connection alone, consider finding a fellow believer to join
            you in this spiritual journey. Together, let's strengthen our faith
            through the power of prayer and communal connection.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: "30px" }}>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Box
              sx={{
                maxWidth: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/img4.png"
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                padding: "20px",
              }}
            >
              <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
                About us
              </Typography>
              <Typography sx={{ textAlign: "start", fontSize: "14px" }}>
                Welcome to Shekinah Haitian SDA Church, a close-knit community
                committed to deepening our connection with God and one another.
                Our mission is simple yet powerful: to foster faith, community,
                and service.
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                Mission
              </Typography>
              <Typography sx={{ textAlign: "start", fontSize: "14px" }}>
                Shekinah exists to create a nurturing space where individuals
                can grow spiritually, experience genuine community, and
                contribute to the well-being of others.
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                Core Values
              </Typography>
              <li>
                <b>Faith:</b>Rooted in unwavering trust in God's transformative
                love.
              </li>
              <li>
                <b>Community:</b> Embracing every member as a valued part of our
                family.
              </li>
              <li>
                <b>Service:</b>Committed to making a positive impact on the
                lives of others.
              </li>
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                Worship
              </Typography>
              <Typography sx={{ textAlign: "start", fontSize: "14px" }}>
                Our services are not just gatherings; they are meaningful
                encounters with the divine. Join us for uplifting music,
                inspiring messages, and a sense of unity.
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                Get Involved
              </Typography>
              <Typography sx={{ textAlign: "start", fontSize: "14px" }}>
                Explore our diverse ministries and activities designed for all
                ages and interests. Whether you seek spiritual growth,
                fellowship, or opportunities to serve, you'll find a welcoming
                place here.
              </Typography>
              <Typography sx={{ textAlign: "start", fontSize: "14px" }}>
                Come, be a part of our journey of faith and fellowship at{" "}
                <b> Shekinah Haitian SDA Church.</b>
              </Typography>
              <Typography sx={{ textAlign: "start", fontSize: "14px" }}>
                {" "}
                <b> We look forward to meeting you!</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "30px", backgroundColor: "black" }}>
        <Grid container>
          <Grid item lg={6}>
            <Box
              sx={{
                maxWidth: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/img5.png"
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                gap: "20px",
                padding: "90px 50px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#FB5F5F",
                  fontFamily: "Roboto",
                  textAlign: "start",
                }}
              >
                Latest Sermon;
              </Typography>
              <Typography>
                For to us a child is born, to us a son is given; and the
                government shall be upon his shoulder, and his name shall be
                called Wonderful Counselor, Mighty God, Everlasting Father,
                Prince of Peace.
              </Typography>
              <Typography>___Isaiah 9:6</Typography>
              <button
                style={{
                  backgroundColor: "#E10B0B",
                  color: "white",
                  fontSize: "24px",
                  borderRadius: "8px",
                  padding: "10px 12px",
                  border: "none",
                }}
                onClick={() => navigate('/sermons')}
              >
                View all Sermons
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 800,
            color: "#FB5F5F",
            textAlign: "center",
          }}
        >
          MINISTRIES
        </Typography>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, textAlign: "center" }}
        >
          Our Ministries
        </Typography>
        <Grid container spacing={5}>
          {data1.map((val, ind) => (
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
                  height: "90vh",
                  position: "relative",
                }}
              >
                <img
                  src={val.imageSrc}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "50vh",
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
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        textAlign: "start",
                      }}
                    >
                      {val.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        textAlign: "start",
                      }}
                    >
                      {val.description}
                    </Typography>
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
        <button
          style={{
            backgroundColor: "#E10B0B",
            color: "white",
            fontSize: "24px",
            borderRadius: "8px",
            padding: "10px 12px",
            border: "none",
          }}
          onClick={() => navigate('/minister')}
        >
          See all Ministries
        </button>
      </Box>
      <Box sx={{ padding: '40px', backgroundColor: 'black', color: 'white', mb: 5 }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, textAlign: "center" }}
        >
          Our Ministries
        </Typography>
        <Grid container spacing={5} sx={{ padding: '50px 0px' }}>
          {materialData.map((val, ind) => (
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
                  backgroundColor: 'white',
                  color: 'black'

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
                    <button onClick={() => navigate('/study-intro')} style={{ backgroundColor: 'transparent', color: '#E10B0B', fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
                  </div>
                </Box>
              </Box>


            </Grid>
          ))}

        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "black", padding: "40px", color: "white" }}>
        <Typography
          sx={{
            fontSize: "43px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Looking to grow in your <br />
          Knowledge and love for GOD
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "40px 40px 80px 40px",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 800,
            color: "#FB5F5F",
            textAlign: "center",
          }}
        >
          Blogs
        </Typography>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, textAlign: "center" }}
        >
          Our Latest Blogs
        </Typography>
        <Grid container spacing={5}>
          {blogData.map((val, ind) => (
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
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
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
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        textAlign: "start",
                      }}
                    >
                      {val.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        textAlign: "start",
                      }}
                    >
                      {val.description}
                    </Typography>
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
        <button
          style={{
            backgroundColor: "#E10B0B",
            color: "white",
            fontSize: "24px",
            borderRadius: "8px",
            padding: "10px 12px",
            border: "none",
          }}
          onClick={() => navigate('/blog')}
        >
          View All Blogs
        </button>
      </Box>
      <Box sx={{ backgroundColor: "black" }}>
        <Grid container spacing={5}>
          <Grid item lg={6}>
            <Box
              sx={{
                maxWidth: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/img12.png"
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                gap: "20px",
                padding: "150px 50px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "white",
                  fontFamily: "Roboto",
                  textAlign: "start",
                }}
              >
                Get in touch
              </Typography>
              <Typography sx={{ fontSize: "40px", textAlign: "start" }}>
                Have a question? <br /> We want to help.
              </Typography>
              <div>
                <button
                  style={{
                    backgroundColor: "#E10B0B",
                    color: "white",
                    fontSize: "24px",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    border: "none",
                  }}
                  onClick={() => navigate('/contact')}
                >
                  Contact us
                </button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LandingContent;
