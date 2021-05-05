/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
import axios, { AxiosError, AxiosResponse } from "axios";
import { store } from "../store/store";
import { Activity } from "./../models/activity";
import { Login, Register, User } from "../models/user";
axios.defaults.baseURL = "http://localhost:5002";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
axios.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        if (data.errors) {
          const modalStateError = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateError.push(data.errors[key]);
            }
          }
          throw modalStateError.flat();
        } else {
          console.log("bad request", data);
        }
        break;
      case 401:
        console.log("unauthorized");
        break;
      case 404:
        console.log("not found");
        break;
      case 500:
        store.commonStore.setServerError(data);
        console.log("server error");
        break;

      default:
        break;
    }
  }
);
const responseBody = <T>(response: AxiosResponse<T>) => response?.data;
const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const activities = {
  list: () => request.get<Activity[]>("/api/activities"),
  delete: (id: string) => request.del<Activity>(`/api/activities/${id}`),
};
const account = {
  current: () => request.get<User>("/api/account/me"),
  login: (user: Login) => request.post<User>(`/api/account/login`, user),
  register: (user: Register) =>
    request.post<User>(`/api/account/register`, user),
};
const agent = {
  activities,
  account,
};
export default agent;
