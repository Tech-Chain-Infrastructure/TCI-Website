import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as nodemailer from "nodemailer";
import cors from "cors";
import express from "express";

// Define secrets
const smtpUser = defineSecret("SMTP_USER");
const smtpPass = defineSecret("SMTP_PASS");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// ✅ Health check route (Cloud Run looks for this)
app.get("/", (req, res) => {
  res.status(200).send("SendEmail Cloud Function is up and running.");
});

app.post("/send", async (req, res) => {
  const { name, email, department, message } = req.body;

  if (!name || !email || !department || !message) {
    return res.status(400).send("Missing required fields");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser.value(),
      pass: smtpPass.value(),
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "emediongeshiet47@gmail.com",
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
    return res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).send("Error sending email");
  }
});

export const sendEmail = onRequest(
  { secrets: [smtpUser, smtpPass], region: "us-central1" },
  app
);
