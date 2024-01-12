import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useBlogStyle } from "../styles";
import {
  Box,
  Grid,
  useTheme,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Text } from "../../../../components/base";
import { getAllBlogs } from "../../../../store/actions/blogActions";
import { useNavigate } from "react-router";

const BlogData = () => {
  const navigate = useNavigate()
  const [blogData, setBlogData] = useState([]);
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = useBlogStyle({ theme });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllBlogs())
      .then((result) => {
        // console.log("========blog Array", result);
        setBlogData(result?.data?.data);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      }).finally(() => {
        setLoading(false);
      });
  }, [setBlogData, dispatch]);

  // console.log("blog data======", blogData);
  const handleBlogDetail = (data) => {
    navigate('/ministerHousing', { state: data })
  }
  return (
    <>
      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: 'auto', color: "#E10B0B" }} />
      ) : (
        <Grid container spacing={5} sx={{ padding: '50px 0px' }}>
          {blogData.map((val, ind) => (
            <Grid key={ind} item lg={4} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  // textAlign: 'center',
                  // alignItems: 'center',
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
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: 400,
                      textAlign: 'start',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 3,
                    }}>{val.description}</Typography>
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent
                      : 'center'
                  }}>
                    <button onClick={() => handleBlogDetail(val)} style={{ backgroundColor: 'transparent', color: '#E10B0B', fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
                  </div>
                </Box>
              </Box>


            </Grid>
          ))}

        </Grid>
      )}
    </>
  );
};

export default BlogData;

//   <Box sx={styles.blogGridItemImageBox}>
//     <Box sx={{ width: "100%", height: "50%" }}>
//       <img
//         src={val?.Image?.url}
//         style={styles.blogGridItemImg}
//         alt="abc"
//       />
//     </Box>
//     <Box sx={styles.blogGridItemTextBox}>
//       <Stack>
//         <Text sx={styles.blogGridItemTitleText}>{val.title}</Text>
//         <Text sx={styles.blogGridItemDescriptionText}>
//           {val.description}
//         </Text>
//       </Stack>
//       <div>
//         <button style={styles.blogGirdItemReadMoreLink}>
//           Read More
//         </button>
//       </div>
//     </Box>
//   </Box>
