import React, { useState } from "react";
import Header from "../../components/AppBar/Header";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "../../layouts/Landing/Footer";
import { contactUs } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const ContactUs = () => {
  const [contactUsState, setContactUsState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    description: "",
  });
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  //   console.log("contactUs values=========", contactUsState);
  const handleChange = (event) => {
    setContactUsState({
      ...contactUsState,
      [event.target.name]: event.target.value,
    });
  };

  const contactUsSubmission = () => {
    // console.log("in submission funciton");
    if (
      contactUsState.first_name.length &&
      contactUsState.last_name.length &&
      contactUsState.email.length &&
      contactUsState.description.length
    ) {
      //   console.log("in if statement");
      const formData = new FormData();
      formData.append("first_name", contactUsState.first_name);
      formData.append("last_name", contactUsState.last_name);
      formData.append("email", contactUsState.email);
      formData.append("description", contactUsState.description);
      dispatch(contactUs(formData))
        .then((result) => {
          setContactUsState({
            ...contactUsState,
            first_name: "",
            last_name: "",
            email: "",
            description: "",
          });
          enqueueSnackbar(result.data.message, {
            variant: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("fill all the inputs");
    }
  };

  return (
    <>
      <Header />
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
            backgroundImage: `url('/img13.png')`,
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
            padding: "0px 200px",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
            Contact Us
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 400, textAlign: "center" }}
          >
            Reach out to Shekinah Haitian SDA Church through our 'Contact Us'
            page. Find our contact details, including address and phone number,
            and use the convenient form for inquiries or prayer requests. We're
            here to connect and support you on your journey of faith.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: "50px" }}>
        <Typography
          sx={{ fontSize: "24px", fontWeight: 700, textAlign: "start" }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={5}>
          <Grid item lg={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                marginTop: "30px",
              }}
            >
              <input
                type="text"
                placeholder="Write Your First Name"
                style={{
                  border: "none",
                  backgroundColor: "#EDE8E8",
                  color: "gray",
                  padding: " 15px 20px",
                  borderRadius: "8px",
                }}
                name="first_name"
                values={contactUsState.first_name}
                onChange={(event) => handleChange(event)}
              />

              <input
                type="text"
                placeholder="Write Your Last Name"
                style={{
                  border: "none",
                  backgroundColor: "#EDE8E8",
                  color: "gray",
                  padding: " 15px 20px",
                  borderRadius: "8px",
                }}
                name="last_name"
                values={contactUsState.last_name}
                onChange={(event) => handleChange(event)}
              />
              <input
                type="email"
                placeholder="Write Your Email"
                style={{
                  border: "none",
                  backgroundColor: "#EDE8E8",
                  color: "gray",
                  padding: " 15px 20px",
                  borderRadius: "8px",
                }}
                name="email"
                value={contactUsState.email}
                onChange={(event) => handleChange(event)}
              />

              <textarea
                placeholder="Write Your Description"
                style={{
                  border: "none",
                  backgroundColor: "#EDE8E8",
                  color: "gray",
                  padding: "15px 20px",
                  borderRadius: "8px",
                }}
                name="description"
                value={contactUsState.description}
                onChange={(event) => handleChange(event)}
              ></textarea>
              <div>
                <button
                  style={{
                    backgroundColor: "#E10B0B",
                    color: "white",
                    fontSize: "24px",
                    borderRadius: "8px",
                    padding: "10px 40px",
                    border: "none",
                  }}
                  onClick={contactUsSubmission}
                >
                  Contact Us
                </button>
              </div>
            </Box>
          </Grid>

          <Grid item lg={7}>
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
                src="/img14.png"
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;
