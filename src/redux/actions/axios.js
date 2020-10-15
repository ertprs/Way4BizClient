import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://way4bizapi.herokuapp.com/"
});
