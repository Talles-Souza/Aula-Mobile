import axios from "axios";

const Axios = axios.create({
    baseURL: "http://10.0.2.2:8080/comercio-seguro",
});

export default Axios;