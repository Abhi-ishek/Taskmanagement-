import { Schema, model } from "mongoose";
const taskSchema = new Schema(
    {

        title:
        {
            type: String,
            required: true,

        },
        content:
        {
            type: String
        },
        status:
        {
            type: String,
            default: "pending"
        },
        user:
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
        //,
        // createdAt:
        // {
        //     type:Date,
        //     default:Date.now()
        // }
    },
    { timestamps: true }   //  It automatically sets createdAt when a document is first created and updates updatedAt every time the document is modified.
)
const task = model("task", taskSchema)

export default task;