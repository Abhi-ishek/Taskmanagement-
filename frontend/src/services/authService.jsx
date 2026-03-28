import API from "../api/axiosInstance"
import toast from "react-hot-toast"
export const loginUser = async (credentials) => {
    try {
        const res = await API.post("/api/auth/login", credentials);
        if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            toast.success("Welcome back " + res.data.user || "to Tasky");
        }
        return res.data;
    } catch (error) {
    const message = error.response?.data?.message || error.message || "Something went wrong";
    toast.error(message);
    throw error;
    }
};

export const registerUser = async (userData) => {
    console.log(userData)
    try {
        if(userData.password.length<4)
        {
            return toast.error("Password too short")
        }
        const res = await API.post("/api/auth/register", userData);
        toast.success("Registration successful!");
        return res.data;
    } catch (error) {
        const message = error.response?.data?.message || "Registration failed";
        toast.error(message);
        throw error;
    }
};