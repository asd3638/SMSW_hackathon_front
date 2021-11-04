import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL =
  "http://ec2-18-218-203-237.us-east-2.compute.amazonaws.com:8080/";

export default instance;
