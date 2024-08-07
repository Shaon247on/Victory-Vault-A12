import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "https://assignment-12-supremacy-server.vercel.app"
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut, loading } = useAuth()   
    // interceptor for get request
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (err) {
        return Promise.reject(err)
    })

    // interceptor for 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (err) => {
        if(loading){
            return <span className="loading loading-spinner text-secondary"></span>
        }
        const status = err.response.status
        if (status === 401 || status === 403) {

            await logOut()
            navigate('/login')
        }
        return Promise.reject(err)
    })
    return axiosSecure
};

export default useAxiosSecure;