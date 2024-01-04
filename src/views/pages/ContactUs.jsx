import React, { useState } from "react";
import Header from "../../components/AppBar/Header";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  TextareaAutosize,
  useTheme,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "../../layouts/Landing/Footer";
import { contactUs } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Text } from "../../components/base";
import { usePageStyle } from "../pages/styles";

const ContactUs = () => {
  const [contactUsState, setContactUsState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    description: "",
  });
  const theme = useTheme();
  const styles = usePageStyle({ theme });
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
      <Box sx={styles.contactBoxRelative}>
        <Box sx={styles.contactBoxAbsolute} />
        {/* Contact Us Paragraph Start */}
        <Box sx={styles.contactBoxTextParagraph}>
          <Text sx={styles.contactUsText}>Contact Us</Text>
          <Text sx={styles.contactUsParagraph}>
            Reach out to Shekinah Haitian SDA Church through our 'Contact Us'
            page. Find our contact details, including address and phone number,
            and use the convenient form for inquiries or prayer requests. We're
            here to connect and support you on your journey of faith.
          </Text>
        </Box>
        {/* Contact Us Paragraph End */}
      </Box>
      {/* Contact Us Box Form Start */}
      <Box sx={{ padding: "50px" }}>
        <Grid container spacing={5} columns={12}>
          <Grid item xs={12} md={12} lg={5}>
            <Text sx={styles.contactUsFormText}>Contact Us</Text>
            <Box sx={styles.inputsBox}>
              <input
                type="text"
                placeholder="Write Your First Name"
                style={styles.inputStyle}
                name="first_name"
                values={contactUsState.first_name}
                onChange={(event) => handleChange(event)}
              />

              <input
                type="text"
                placeholder="Write Your Last Name"
                style={styles.inputStyle}
                name="last_name"
                values={contactUsState.last_name}
                onChange={(event) => handleChange(event)}
              />
              <input
                type="email"
                placeholder="Write Your Email"
                style={styles.inputStyle}
                name="email"
                value={contactUsState.email}
                onChange={(event) => handleChange(event)}
              />

              <textarea
                placeholder="Write Your Description"
                style={styles.inputStyle}
                name="description"
                value={contactUsState.description}
                onChange={(event) => handleChange(event)}
              ></textarea>
              <div>
                <button
                  style={styles.contactUsButton}
                  onClick={contactUsSubmission}
                >
                  Contact Us
                </button>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={7}>
            <Box sx={styles.contactUsImageBox}>
              <img src="/img14.png" alt="" style={styles.contactUsImg} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: '50px' }}>
        <img src="img24.png" alt="" style={{ height: '100%', width: '100%' }} />
      </Box>
      {/* Contact Us Box Form End */}
      <Footer />
    </>
  );
};

export default ContactUs;
