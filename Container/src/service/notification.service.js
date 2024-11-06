import { Http } from "../Http";
import axios from "axios";
import { baseURL } from "../config";

export const login = (email, password) => {
  const config = {
    method: 'post',
    url: 'https://api.fvth.freshvoice.app/users/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "email": email,
      "password": password
    },
  };

  return axios(config);

};

// 

  export const getNotification = (token) => {
    const config = {
      method: 'get',
      // for enambling client server page numbering
       //url: 'https://62eb7afe55d2bd170e6f1e5e.mockapi.io/notification/notification',
      url: baseURL()+ '/notification/notification_manage/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };
  
    return axios(config);
  
  };
  export const getUnreadnotification = (token) => {
    const config = {
      method: 'get',
      // for enambling client server page numbering
       //url: 'https://62eb7afe55d2bd170e6f1e5e.mockapi.io/notification/notification',
      url: baseURL()+ '/notification/notification_manage/?get_seen_messages=Unread',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };
  
    return axios(config);
  
  };
  export const getNotificationid = (token, id) => {
    const config = {
      method: 'get',
      // for enambling client server page numbering
       //url: 'https://62eb7afe55d2bd170e6f1e5e.mockapi.io/notification/notification',
      url: baseURL()+ 'notification/notification_manage/' + id + '/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };
  
    return axios(config);
  
  };
  
  export const patchNotificationStatus= (token, nomessage, id) => {
    const config = {
      method: 'patch',
      url:  baseURL()+'/notification/notification_manage/'+ id + '/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
     data: nomessage,
    };
  
    return axios(config);
  };