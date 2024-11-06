// Hehe python effect import {Http} from "../components/UserApp"
import axios from "axios";
import { baseURL } from "../config";

export const finYear = (token) => {
  const config = {
    method: 'get',
    url: baseURL()+'/company/properties',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  return axios(config);
};
export const fetchYear = (token) => {
  const config = {
    method: 'get',
    url: baseURL()+'/company/config/form-data',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  return axios(config);
};

export const comProbs = (finyr, compcode) => {
  const config = {
    method: 'post',
    url: baseURL()+'/company/properties',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "finyr": finyr,
      "compcode": compcode
    },
  };
  return axios(config);
};

export const comProbsUpdate = (finyr, compcode, token) => {
  const config = {
    method: 'post',
    url: baseURL()+'/company/properties',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    data: {
      "finyr": finyr,
      "compcode": compcode
    },
  };
  return axios(config);
};

export const reloadToken = (token) => {
  const config = {
    method: 'post',
    url: baseURL()+'/users/reload-token',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };
  return axios(config);
};
export const companyProperties = (token) => {
  const config = {
    method: 'get',
    url: baseURL()+'/company/properties',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  return axios(config);
};


export const getuser= (token,userid) => {
  const config = {
    method: 'get',
    // for enambling client server page numbering
    baseURL: baseURL()+'/users/'+userid+'/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  return axios(config);

};