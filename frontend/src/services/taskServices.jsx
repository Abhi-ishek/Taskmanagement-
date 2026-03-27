import API from "../api/axiosInstance"

export const getAllTasks = async ()=>  API.get("/api/tasks/all")
export const updateEditedTask = async (taskData)=>  API.put(`/api/tasks/editTask/${taskData.id}`, {...taskData})
export const addNewTask = async (taskData)=> API.post(`/api/tasks/add`, taskData)
export const deleteTask = async (taskId)=>  API.delete(`api/tasks/delete/${taskId}`)
export const updateStatus = async (taskId)=>  API.put(`/api/tasks/update/${taskId}`)
