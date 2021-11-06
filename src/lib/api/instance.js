import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "http://localhost:8080/";
instance.defaults.withCredentials = false;
instance.defaults.headers["Accesss-Control-Allow-Origin"] = "*";
instance.defaults.headers["Content-Type"] = "*/*";

export default instance;
