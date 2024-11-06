import { Http } from "../Http";
import axios from "axios";
import { baseURL } from "../config";
export const login = async (data) => {
  return Http.post("/users/login", data);
};

export const getApi = () =>
  axios.create({
    //baseURL: "https://ipssapi.techgenzi.com/",
    baseURL: baseURL(),
    headers: {
      Accept: "application/json",
    },
  });

export const LoginApi = (url, data, token) => {
  const config = {
    method: "post",
    url: baseURL() + url,

    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  token && (config.headers.Authorization = `Bearer ${token}`);

  return axios(config);
};

export const getAllUsers = (demo_id, token) => {
  const config = {
    method: "get",
    url: baseURL() + "/users/demo-users/" + demo_id,

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  return axios(config);
};
