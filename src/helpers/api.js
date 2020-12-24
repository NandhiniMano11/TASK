import * as axios from "axios";
// import { getCookie } from "./utils";

export default class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = ' https://eatoo.uberdoo.com/foodapp/public/api/guest/';
  }

  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");

    let headers = {
      Accept: "application/json",
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  listRestaurant = (params) => {
    return this.init().post("/listRestaurant", { params: params });
  };

  
}