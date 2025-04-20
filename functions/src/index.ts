import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import cors from "cors";
import express from "express";

// Configure CORS
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Configure mail transporter (replace with your credentials)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password",
  },
});

// POST endpoint for sending email
app.post("/", async (req, res) => {
  const { name, email, department, message } = req.body;

  if (!name || !email || !department || !message) {
    res.status(400).send("Missing required fields");
    return;
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "your-receiving-email@example.com",
    subject: `New Contact Form Message - ${department}`,
    text: `
      Name: ${name}
      Email: ${email}
      Department: ${department}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).send("Error sending email");
  }
});

// Export the cloud function
export const sendEmail = functions.https.onRequest(app);
