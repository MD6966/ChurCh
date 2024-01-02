import axios from "axios";

const api = axios.create({
  baseURL: "https://church.saeedantechpvt.com/",
});

const getToken = () => {
  return localStorage.getItem("token");
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers[
        "Authorization"
      ] = `Bearer 2|kJeTJ0kIOJhly30kxIixe9F904ESQVuZ7gtTce6wca99831c`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const prayRequest = (formData) => async (dispatch) => {
  try {
    const res = await api.post("api/jobPost", formData);
    return res;
  } catch (err) {
    throw err;
  }
};

export const contactUs = (formData) => async () => {
  try {
    // console.log("in try Statement=========");
    const response = await api.post(
      "https://church.saeedantechpvt.com/api/contactus",
      formData
    );
    return response;
  } catch (error) {
    // console.log("in catch Statement=========");
    throw error;
  }
};
