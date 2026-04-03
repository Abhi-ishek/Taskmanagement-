const bcrypt = require("bcryptjs")
const Users = require("../models/Users.js")
const jwt = require("jsonwebtoken")
const mongoose = require ("mongoose")
exports.login = async (req, res, next)=>
{
    try
    {
        const {email, password} = req.body

        if (mongoose.connection.readyState !== 1) {
            return res.status(500).json({ message: "Database connection busy. Try again." });
        }
        let user = await Users.findOne({email}).maxTimeMS(3000)
        if(!user)
        {
           return res.status(404).json(
                {
                    success:false,
                    message:"User not found with given email"
                }
            )
        }
        // const ismatch = await bcrypt.compare(password, user.password)
        // if(!ismatch)
        //     return res.status(400).json(
        // {
        //     success:false,
        //     message:"invalid credentials given check again"
        // })
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"24h"})
        res.status(200).json(
            {
                message:"Login successful",
                user : user.name,
                token:token
            }
        )

    }
    catch(err)
    {
        next(err)
    }
}