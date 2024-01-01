import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// const StyledFooter = styled(Box)(({ theme }) => ({
//   minHeight: '30vh',
//   background: theme.palette.primary.main,
//   padding: theme.spacing(3),

// }))
const data1 = [
  {
    heading: 'Events'
  },
  {
    heading: 'Volunteers'
  },
  {
    heading: 'Giving Online'
  },
  {
    heading: 'Our Blogs'
  },
  {
    heading: 'About us'
  },
  {
    heading: 'Contact us'
  },
]
const data2 = [
  {
    heading: 'Our Benefits'
  },
  {
    heading: 'Mission & Vision'
  },
  {
    heading: 'Ministries'
  },
  {
    heading: 'Job & Residencies'
  },
  {
    heading: 'Wedding & Funerals'
  },

]
const data3 = [
  {
    heading: 'Children'
  },
  {
    heading: 'Care'
  },
  {
    heading: 'Institute'
  },
  {
    heading: 'Human Rights'
  },
  {
    heading: 'Family'
  },
  {
    heading: 'Leadership'
  },

]
const data4 = [
  {
    icon: <FacebookIcon />,
    heading: 'Facebook'
  },
  {
    icon: <TwitterIcon />,
    heading: 'Twitter'
  },
  {
    icon: <InstagramIcon />,
    heading: 'Instagram'
  }
];
const data5 = [

  {

    heading: '+421 233 256 256'
  },
  {

    heading: '+421 233 256 256'
  }
];
const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#C10000', padding: '100px' }}>
        <Grid container spacing={10}>
          <Grid item lg={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {data1.map((val, ind) => (
                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: "white", textAlign: 'start' }}>{val.heading}</Typography>
              ))}

            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box>
              <Typography sx={{ fontSize: '22px', fontWeight: 600, color: "white", textAlign: 'start' }}>Shekinah Haitian SDA Church</Typography>
              {data2.map((val, ind) => (
                <Typography sx={{ fontSize: '16px', fontWeight: 400, color: "white", textAlign: 'start' }}>{val.heading}</Typography>
              ))}
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box>
              <Typography sx={{ fontSize: '22px', fontWeight: 600, color: "white", textAlign: 'start' }}>Ministries</Typography>
              {data3.map((val, ind) => (
                <Typography sx={{ fontSize: '16px', fontWeight: 400, color: "white", textAlign: 'start' }}>{val.heading}</Typography>
              ))}
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box >
              <Typography sx={{ fontSize: '22px', fontWeight: 600, color: "white", textAlign: 'start' }}>Social Media</Typography>
              {data4.map((val, ind) => (
                <Box key={ind} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  {val.icon && <span style={{ marginRight: '10px', color: 'white' }}>{val.icon}</span>}
                  <Typography sx={{ fontSize: '16px', fontWeight: 400, color: 'white', textAlign: 'start' }}>{val.heading}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box >
              <Typography sx={{ fontSize: '22px', fontWeight: 600, color: "white", textAlign: 'start' }}>Sales Contact</Typography>
              {data5.map((val, ind) => (
                <Box key={ind} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <LocalPhoneIcon sx={{ color: 'white' }} />
                  <Typography sx={{ fontSize: '16px', fontWeight: 400, color: 'white', textAlign: 'start' }}>{val.heading}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item lg={2}>
            <Box >
              <Typography sx={{ fontSize: '22px', fontWeight: 600, color: "white", textAlign: 'start' }}>GET THE NEWSLETTER</Typography>
              <Box sx={{ display: 'flex' }}>

                <input style={{ border: 'none', padding: ' 5px 10px', borderRadius: '8px' }} placeholder='Text...' type="text"></input>
                <button style={{ backgroundColor: 'white', padding: '5px 10px ', border: 'none', borderRadius: '8px' }}>submit</button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default Footer
