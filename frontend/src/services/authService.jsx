import API from "../api/axiosInstance"
import toast from "react-hot-toast"
export const loginUser = async (credintials)=> {
    const res = await API.post("/api/auth/login", credintials)
    const token =res.data.token;
    console.log(res.data)
    if(res.status===404)
    {
        return toast.error("User not found")
    }
    if(res.data.token)
    {    localStorage.setItem("token", token);
        }
    return res.data;
}
export const registerUser = async (userData)=>{
    const res = await API.post("/api/auth/register", userData)
    return res.data;
}

