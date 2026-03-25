const nm = require("nodemailer")
const Users = require("../models/Users.js")
const jwt = require("jsonwebtoken")
exports.sendEmail = async (req, res, next)=>
{
try{
    const email = req.body.email
    const user = await Users.findOne({email})
    if(!user)
        return res.status(400).json({error:"Provided email is not registerd"})
    const transporter = nm.createTransport(
    {
        service:"gmail",
        auth:
        {
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    } )
                                        
const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"5m"})
const options =
{
    from:process.env.EMAIL_PASS,
    to:email,
    subject:" To change Tasky password",
    html:`<p>Please reset your password using the following Link, This link will expire within 5 minutes.
    <a href="http://localhost:5173/reset-password/${token}"> click here to reset password</a>
    </p>`
}


transporter.sendMail(options, (err, success)=>
{
    if(err)
      {
        console.log(error)
        return  res.status(401).json({message:"Server down please try after some time"})
      }
      return res.status(200).json({message:"link to change password sent successfully to *****"+email.slice(5, -1)})
})
}
catch(error)
    {
        next(error)
    }

}