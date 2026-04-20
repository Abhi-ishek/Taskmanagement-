import Users from "../models/Users.js";
import jwt from "jsonwebtoken";
import axios from "axios";

export const sendEmail = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Provided email is not registered" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });

    const htmlContent = `
      <p>Please reset your password using the following link. This link will expire within 15 minutes.<br><br>
      <a href="https://task-manager-mern-full-stack.vercel.app/reset-password/${token}">Click here to reset password</a></p>
    `;

    // sending the request to brevo using zxios
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { email: process.env.EMAIL_USER, name: 'Task Manager App' },
        to: [{ email: email }],
        subject: 'To change Tasky password',
        htmlContent: htmlContent
      },
      {
        headers: {
          'accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
          'content-type': 'application/json'
        }
      }
    );

    return res.status(200).json({
      message: "Reset link sent successfully to *****" + email.slice(5)
    });

  } catch (error) {
    // axios errors contains the response from brevo
    if (error.response) {
      console.error("Brevo API Error:", error.response.data);
      return res.status(500).json({ message: "Email service error. Please try later." });
    }
    next(error);
  }
};

