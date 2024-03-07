import axios from "axios"
import { getToken } from "./helper";
import { baseURL } from "./helper";
import { toast } from "react-toastify";

const api =  axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})
api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},
    (error) => {
        return Promise.reject(error)

    }
)
api.interceptors.response.use((response) => {
    return response
},
    

    (error) => {
        if (error.response) {
            console.log(error)
            toast.error( error.response.data?.message)
        } else if (error.request) {
          toast.error("No response received:", error.request?.data.message);
        } else {
          toast.error("Request error:", error.message);
        }
    
        return Promise.reject(error);
      }
)

export default api;