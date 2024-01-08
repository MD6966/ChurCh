import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/AppBar/Header";
import Footer from "../../layouts/Landing/Footer";
import { useDispatch } from "react-redux";
import {
  getPrayRequest,
  postPrayRequest,
} from "../../store/actions/userActions";
import { Text } from "../../components/base";

import { useSnackbar } from "notistack";

const PrayerRequest = () => {
  //   const [selectedCategoryId, setSelectedCategoryId] = useState([]);
  const [requestForm, setRequestForm] = useState({
    first_name: "",
    last_name: "",
    category_id: "",
    pray_request: "",
  });

  const [prayerRequest, setPrayerRequest] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // setSelectedCategoryId(event.target.value);
    // You can perform additional actions with the selected category ID here if needed

    setRequestForm({ ...requestForm, [event.target.name]: event.target.value });
  };
  const getPrayerRequest = () => {
    dispatch(getPrayRequest())
      .then((result) => {
        // console.log("========result", result?.data?.payload);
        setPrayerRequest(result?.data?.payload);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      });
  };

  useEffect(() => {
    getPrayerRequest();
  }, []);

  //   console.log("===========prayerRequest===========", prayerRequest);
  // console.log("===========requestForm===========", requestForm);

  const submitPrayRequest = () => {
    if (
      requestForm.first_name.length &&
      requestForm.last_name.length &&
      requestForm.category_id.length &&
      requestForm.pray_request.length
    ) {
      const formData = new FormData();
      formData.append("first_name", requestForm.first_name);
      formData.append("last_name", requestForm.last_name);
      formData.append("category_id", requestForm.category_id);
      formData.append("pray_request", requestForm.pray_request);
      dispatch(postPrayRequest(formData))
        .then((result) => {
          //   console.log("=======response========", result);
          setRequestForm({
            ...requestForm,
            first_name: "",
            last_name: "",
            category_id: "",
            pray_request: "",
          });
          enqueueSnackbar(result.data.message, {
            variant: "success",
          });
        })
        .catch((error) => {
          console.log("error in catch======", error);
          // enqueueSnackbar(error, {
          //   variant: "error",
          // });
        });
    } else {
      enqueueSnackbar("Fill All inputs values", {
        variant: "error",
      });
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
            backgroundImage: `url('/img25.png')`,
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
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Stack></Stack>
          <Text sx={{ fontSize: "32px", fontWeight: 600 }}>
            {" "}
            Prayer Request
          </Text>
          <Text sx={{ paddingX: 5 }}>
            Share your prayer requests with us. At Shekinah Haitian SDA Church,
            we stand together in faith, supporting one another through the power
            of prayer. Your concerns matter to us, and our community is here for
            you, seeking strength, healing, and peace together.
          </Text>
        </Box>
      </Box>
      <Box sx={{ padding: "30px 40px" }}>
        <Stack spacing={2}>
          <Text
            sx={{
              fontWeight: 800,
              fontSize: { xs: "23px", md: "28px" },
              lineHeight: "32.81px",
            }}
          >
            Prayer Requests Form
          </Text>
          <Text
            sx={{
              fontWeight: 400,
              fontSize: { xs: "17px", md: "24px" },
              lineHeight: "28.13px",
            }}
          >
            Please fill in this information so we can deliver your prayer
          </Text>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginTop: "30px",
          }}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
            <input
              type="text"
              placeholder="First Name"
              style={{
                border: "none",
                backgroundColor: "#EDE8E8",
                color: "gray",
                padding: " 15px 20px",
                borderRadius: "8px",
                width: "100%",
              }}
              name="first_name"
              onChange={(event) => handleChange(event)}
              value={requestForm.first_name}
            />
            <input
              type="text"
              placeholder="Last Name"
              style={{
                border: "none",
                backgroundColor: "#EDE8E8",
                color: "gray",
                padding: " 15px 20px",
                borderRadius: "8px",
                width: "100%",
              }}
              name="last_name"
              onChange={(event) => handleChange(event)}
              value={requestForm.last_name}
            />
          </Box>

          <select
            style={{
              width: "100%",
              padding: " 15px 20px",
              border: "none",
              backgroundColor: "#EDE8E8",
              borderRadius: "8px",
            }}
            name=" category_id"
            onChange={(event) =>
              setRequestForm({
                ...requestForm,
                category_id: event.target.value,
              })
            }
            value={requestForm.category_id}
          >
            <option disabled value="">
              Select prayer request
            </option>
            {prayerRequest?.map((request, index) => (
              <option key={index} value={request?.id}>
                {request?.name}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Write Your Prayers"
            style={{
              border: "none",
              backgroundColor: "#EDE8E8",
              color: "gray",
              padding: "15px 20px",
              borderRadius: "8px",
            }}
            name="pray_request"
            onChange={(event) => handleChange(event)}
            value={requestForm.pray_request}
          ></textarea>
          <div>
            <button
              style={{
                backgroundColor: "#E10B0B",
                color: "white",
                fontSize: "18px",
                borderRadius: "8px",
                padding: "10px 40px",
                border: "none",
              }}
              onClick={submitPrayRequest}
            >
              Submit Prayer
            </button>
          </div>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PrayerRequest;