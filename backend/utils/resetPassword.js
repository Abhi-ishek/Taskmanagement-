const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const usersdb = require("../models/Users.js")
exports.resetPass= async (req, res)=>
{
    try{
        const token =  req.body.token;
        const restPassword = req.body.password;
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded.id)
        console.log(restPassword)
        if(!decoded || !decoded.id)
            return res.status(404).json({ message: "Invalid or expired token" })
        const salt = await bcrypt.genSalt(10)
        const hassedPassword = await bcrypt.hash(restPassword, salt)
        const user = await usersdb.findByIdAndUpdate(decoded.id, {password:hassedPassword}, {new:true})
        if(!user)
            {   
                return res.status(404).json({message:"User not found"})
            }
            return res.status(200).json({message:"Password reset success"})      
       
        
    }
        catch(err)
        {
            res.status(500).json({message:"server down try later"})
        }
}