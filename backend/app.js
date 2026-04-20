import 'dotenv/config';
// app.use("/users", taskRouter)
import express, { json } from "express";
const app = express();  
import cors from 'cors';

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
};
app.use(cors(corsOptions));

app.use(json())    // to access request body
import taskRouter from "./routes/taskRoutes.js";
import { connect } from "mongoose";
import tasks from "./models/Tasks.js";


connect(process.env.MONGO_URI)
.then(()=>
{
    console.log("connected to mongodb")
})
.catch((err)=>
{
    console.log(err);
})


app.use("/", (req, res, next)=>
{
    // res.send("bye bye")
    next();
})

app.use("/api", taskRouter)
app.use ("/tasks", tasks)

app.use((err, req, res, next)=>
{
    console.error(err.stack);           //err.stack is a property of that error object that provides a detailed string trace of the function calls leading to the
    res.status(500).json(
        {
            success:false,
            message:"something went wrong on the server..",
            error:err.message             // err.message provides a human-readable description of the error, while err.stack provides a detailed trace of function calls that led to the error
        }
    );
}
);
const PORT =process.env.PORT||4400

app.listen(PORT, ()=>
{
    console.log("server started ")
}
)
