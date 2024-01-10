import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useDispatch } from "react-redux";
import { getMinistry, getStudyMaterials } from "../../store/actions/userActions";
import { getAllBlogs } from "../../store/actions/blogActions";
const data = [
  {
    imageSrc: "/img1.png",
    title: 'Purposeful Living',
    description:
      "Embark on a Heartwarming Journey this Sunday at our Magical Christmas Eve Service! Join us for an enchanting celebration filled cherished memories,uplifting carols, and the joyous spirit of community.Bring the whole family and immerse yourselves in the magic of Christmas, creating moments that will be treasured for years to come!.",
    buttonText: "Live 10:00 AM",
  },
  {
    imageSrc: "/img2.png",
    title: 'Rise and Shine',
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
  const [showMinistry, setShowMinistry] = useState([])

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getMinistries = () => {
    dispatch(getMinistry())
      .then((result) => {
        // console.log("========result", result.data.data[0]?.Image.url);
        setShowMinistry(result.data.data);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getMinistries()
  }, []);
  const handleMinistry = (data) => {

    // console.log(data, ' this is dada')
    navigate('/ministerHousing', { state: data })
  }
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
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    dispatch(getAllBlogs())
      .then((result) => {
        // console.log("========blog Array", result);
        setBlogData(result?.data?.data);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      });
  }, [setBlogData, dispatch]);

  // console.log("blog data======", blogData);
  const handleBlogDetail = (data) => {
    navigate('/ministerHousing', { state: data })
  }
  return (
    <>

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
                gap: '15px'
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: 600, color: '#E10B0B' }}>
                About us
              </Typography>
              <Typography sx={{
                textAlign: "start", fontSize: "22px", fontWeight: 800
              }}>
                Striving for a greener tomorrow, one small step at a time.
              </Typography>
              <Typography sx={{ textAlign: "start", fontSize: "16px", fontWeight: 400, fontColor: '#6A6868' }}>
                We extend a warm welcome to Shekinah Haitian SDA Church, where we joyfully share the transformative message of Jesus Christ with all who seek to listen.
              </Typography>
              <Typography sx={{ textAlign: "start", fontSize: "16px", fontWeight: 600, fontStyle: 'italic' }}>
                In the refuge of the Lord's name, the righteous find strength and safety, a steadfast tower in times of need.
              </Typography>
              <Grid container>
                <Grid item lg={6}>
                  <Box>
                    <Box sx={{ borderRadius: '50%', display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <Box sx={{ backgroundColor: '#E10B0B', height: '50px', width: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FavoriteOutlinedIcon sx={{ color: 'white', }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Place of Heaven</Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ textAlign: 'start', mt: 1, color: '#6A6868' }}>
                      At Shekinah Haitian SDA Church, immerse
                      yourself in a sanctuary of divinity, piety,
                      goodness, and steadfast faith.
                    </Typography>

                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box>
                    <Box sx={{ borderRadius: '50%', display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <Box sx={{ backgroundColor: '#E10B0B', height: '50px', width: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LocalLibraryOutlinedIcon sx={{ color: 'white', }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Study Bible</Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ textAlign: 'start', mt: 1, color: '#6A6868' }}>
                      Explore profound knowledge and spiritual
                      growth within the pages of our study Bible
                      —a sacred journey of understanding and faith.
                    </Typography>

                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box >
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
            gap: '15px',
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
            sx={{ fontSize: "20px", fontWeight: 400, textAlign: "center", padding: '0px 50px' }}
          >
            Engage in Prayer, Listen to God's Voice! While you can seek this
            sacred connection alone, consider finding a fellow believer to join
            you in this spiritual journey. Together, let's strengthen our faith
            through the power of prayer and communal connection.
          </Typography>
          <button
            style={{
              backgroundColor: "#E10B0B",
              color: "white",
              fontSize: "22px",
              borderRadius: "8px",
              padding: "10px 12px",
              border: "none",

            }}
            onClick={() => navigate('/prayer-request')}
          >
            Prayer Request
          </button>
        </Box>
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
          {showMinistry.slice(0, 3).map((val, ind) => (
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
                  height: "100%",
                  position: "relative",
                }}
              >
                <img
                  src={val.Image.url}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "40vh",
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

                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'start',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 3,
                      }}
                    >
                      {val.description}
                    </Typography>
                  </div>
                  <div>
                    <button onClick={() => handleMinistry(val)} style={{ backgroundColor: 'transparent', color: '#E10B0B', fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
                  </div>
                </Box>
              </Box>
            </Grid>
          ))}
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
                // alignItems: "center",
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
                Message from paster:
              </Typography>
              <Typography sx={{ textAlign: 'start' }}>
                For to us a child is born, to us a son is given; and the
                government shall be upon his shoulder, and his name shall be
                called Wonderful Counselor, Mighty God, Everlasting Father,
                Prince of Peace.
              </Typography>
              <Typography>___Isaiah 9:6</Typography>

            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: '40px', mb: 5 }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, textAlign: "center" }}
        >
          Study Materials
        </Typography>
        <Grid container spacing={5} sx={{ padding: '50px 0px' }}>
          {studyMaterials.slice(0, 3).map((val, ind) => (
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
                  // backgroundColor: 'white',
                  // color: 'black'

                }}
              >
                <img
                  src={val.Image.url}
                  style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
                  alt="abc"
                />
                <Box sx={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'start' }}>{val.title}</Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 400, textAlign: 'start' }}>{val.description}</Typography>
                  </div>
                  <div>
                    <button onClick={() => handleBlogDetail(val)} style={{ backgroundColor: 'transparent', color: '#E10B0B', fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
                  </div>
                </Box>
              </Box>


            </Grid>
          ))}

        </Grid>
      </Box>

      {/* <Box
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
      </Box> */}
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
            backgroundImage: `url('/img19.png')`,
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
            backgroundColor: "rgba(10, 28, 50, 0.50)",
            zIndex: 0,
          }}
        />
        <Grid container sx={{ padding: '0px 50px', zIndex: 1 }} spacing={5}>
          <Grid item lg={4}>
            <Box sx={{ position: 'absolute', backgroundColor: '#E10B0B', color: 'white', top: -30, padding: '60px 20px 85px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', borderRadius: '8px' }}>
              <PhoneOutlinedIcon />
              <Typography>Shekinah Haitian SDA Church </Typography>
              <Typography>3700 W. Risinger Rd Fort Worth, TX 76123</Typography>
              <Typography>info@shekinahsda.org</Typography>


            </Box>
          </Grid>
          <Grid item lg={8}>
            <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'start', justifyContent: 'start', marginBottom: '30px' }}>
              <Typography sx={{ fontSize: '35px', fontWeight: 700 }}>Get in touch</Typography>
              <Typography sx={{ fontSize: '35px', fontWeight: 700 }}>Don't hesitate Contact Us</Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'start', padding: '0px 50px 0px 0px' }}>Feel free to Contact Us. Shekinah Haitian SDA Church WP Theme comes with sermons, ministries, events, testimonies, staff members, church locations short codes to enhance your website.</Typography>
              <Box>
                <button
                  style={{
                    backgroundColor: "#E10B0B",
                    color: "white",
                    fontSize: "22px",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    border: "none",

                  }}
                  onClick={() => navigate('/contact')}
                >
                  Contact us
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>




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
        <Grid container spacing={5} sx={{ padding: '20px 0px' }}>
          {blogData.map((val, ind) => (
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
                  src={val.Image.url}
                  style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
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



    </>
  );
};

export default LandingContent;
