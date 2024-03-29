import axios from "axios";
import {FormDataType} from "../components/Login/Login";

export const socialNetworkAPI = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'be875852-03e1-49b7-b83f-77b1314eb6c4',
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return socialNetworkAPI
         .get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   },
   postFollowStatus(userID: number) {
      return socialNetworkAPI
         .post(`follow/${userID}`)
         .then(response => response.data);
   },
   deleteFollowStatus(userID: number) {
      return socialNetworkAPI
         .delete(`follow/${userID}`)
         .then(response => response.data);
   },
};

export const profileAPI = {
   getProfile(userID: string) {
      return socialNetworkAPI
         .get(`profile/${userID}`);
   },
   getStatusProfile(userID: string) {
      return socialNetworkAPI.get(`profile/status/${userID}`);
   },
   updateStatusProfile(status: string) {
      return socialNetworkAPI.put(`profile/status`, {status})
   },
};

export const authAPI = {
   isRegistered() {
      return socialNetworkAPI.get(`auth/me`)
         .then(response => response.data);
   },
   logIn(formData: FormDataType) {
      return socialNetworkAPI.post(`auth/login`, formData)
   },
   logOut() {
      return socialNetworkAPI.delete(`auth/login`);
   }
};


/*export const getUsers = (currentPage = 1, pageSize = 5) => {
   return socialNetworkAPI
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
}*/
/*export const getUsers = (currentPage = 1, pageSize = 5) => {
   return axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
         }
      ).then(response => {
         return response.data;
      })
}*/
