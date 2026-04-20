import express from "express";
const router = express.Router();
import tasksdb from "../models/Tasks.js";
import { protect } from "../middlewares/authMiddleware.js";
import { getallTasks, createTask, updateTask, deleteTask, register, editTask } from "../Controller/taskcontroller.js";
import { login } from "../Controller/authcontroller.js";
import { sendEmail as _sendEmail } from "../utils/sendEmail.js";
import { resetPass } from "../utils/resetPassword.js";
//clean approach
router.get("/tasks/all", protect, getallTasks)
router.post("/tasks/add", protect, createTask)
router.put("/tasks/update/:id", protect, updateTask)
router.delete("/tasks/delete/:id", protect, deleteTask)
router.post("/auth/register", register)
router.post("/auth/login", login)
router.put("/tasks/editTask/:id", protect, editTask)
router.post("/reset-password/", _sendEmail)
router.post("/reset-password/request", resetPass)
router.put("/api/tasks/editTask/:id", protect, editTask)

///my intial approach as a beginner i did
// router.get("/all", async (req, res)=>
// {
//     let alltasks = await tasksdb.find({});
//     if(!alltasks.length==0)
//     res.send(alltasks)
//     else
//         res.send("empty");
// })
// router.get("/:id", async (req, res)=>
// {   
//     try
//     {
//     const task = await tasksdb.findById(req.params.id)
//     if(!task) return res.status(404).send("task not found")
//     return res.send(task);
//     }
//     catch(err)
//     {
//         res.status(400).json({ms:"invalid id entered"});
//     }

// })
// router.post("/add", async(req, res)=>
// {
//     let newTask = await tasksdb.create({
//         title : req.body.title,
//         content : req.body.content,
//     })
//     console.log(newTask)
//     res.send(newTask);
// })
// router.put("/update/:id", async (req, res)=>
// {
//     const id = parseInt(req.params.id)
//     const task = await tasksdb.findByIdAndUpdate(req.params.id, {status:"completed"}, {new:true})
//     if(!task)
//        return res.status(404).json({msg:`task with id ${id} not found`})
//     return res.json({msd : task})

// })
// router.delete("/delete/:id", async (req, res)=>
// {
//     const id = parseInt(req.params.id)
//     const task = await tasksdb.findByIdAndDelete(id)
//     if(!task)
//         return res.status(404).json({msg:`task with id ${id} not found`})
//     {    
//     res.send(`task ${req.params.id} deleted successfully` + task)
//     }
// })

export default router;
