import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as nodemailer from "nodemailer";
import cors from "cors";
import express from "express";

const smtpUser = defineSecret("SMTP_USER");
const smtpPass = defineSecret("SMTP_PASS");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

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
  to: "techchaininfrastructure@gmail.com",
  subject: `New Contact Form Message - ${department}`,
  html: `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f6fff9; padding: 25px;">

      <div style="
        max-width: 650px; 
        margin: auto; 
        background: #ffffff; 
        border-radius: 10px; 
        border: 1px solid #e8fbe8;
        box-shadow: 0 2px 6px rgba(0,0,0,0.06); 
        padding: 25px;
      ">
        
        <h2 style="
          color: #00C853; 
          border-bottom: 2px solid #00C853; 
          padding-bottom: 8px; 
          margin: 0;
          letter-spacing: 0.5px;
        ">
          New Contact Form Message
        </h2>

        <p style="margin-top: 18px; font-size: 15px; line-height: 1.7; color: #222;">
          <strong>Name:</strong> ${name}<br>
          <strong>Email:</strong> 
          <a href="mailto:${email}" style="color: #00C853; text-decoration: none;">
            ${email}
          </a><br>
          <strong>Department:</strong> ${department}
        </p>

        <div style="margin-top: 25px;">
          <h3 style="color: #00973a; margin-bottom: 8px;">Message</h3>
          <p style="
            white-space: pre-line; 
            background: #f1fff4; 
            border-left: 4px solid #00C853; 
            padding: 14px; 
            border-radius: 5px; 
            font-size: 15px;
            color: #333;
          ">
            ${message}
          </p>
        </div>

        <footer style="
          margin-top: 35px; 
          font-size: 13px; 
          color: #666; 
          text-align: center; 
          border-top: 1px solid #eaeaea; 
          padding-top: 12px;
        ">
          This message was sent from the Tech Chain Infrastructures website contact form.<br>
          <span style="color: #00C853; font-weight: bold;">
            &copy; ${new Date().getFullYear()} Tech Chain Infrastructures
          </span>
        </footer>
      </div>

    </div>
  `,
};


const userMailOption = {
  from: `"Tech Chain Infrastructures" <techchaininfrastructure@gmail.com>`,
  to: email,
  subject: "We Received Your Message",
  html: `
    <div style="
      font-family: Arial, sans-serif;
      background-color: #ffffff;
      padding: 25px;
      color: #222;
      line-height: 1.6;
    ">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #00C853; margin: 0; font-size: 26px; letter-spacing: 1px;">
          TECH CHAIN
        </h2>
        <p style="color: #00C853; margin: 0; font-size: 14px;">
          INFRASTRUCTURES
        </p>
        <hr style="border: none; border-top: 1px solid #e6e6e6; margin-top: 15px;">
      </div>

      <p>Hi <strong>${name}</strong>,</p>

      <p>
        Thanks for reaching out!  
        We’ve received your message and our team will get back to you soon.
      </p>

      <div style="
        border-left: 4px solid #00C853;
        padding-left: 12px;
        margin: 18px 0;
        background: #f6fff9;
      ">
        <strong>Your message:</strong><br>
        <em>${message}</em>
      </div>

      <p style="margin-top: 30px; color: #00C853; font-weight: bold;">
        Team Support  
        <br>
        Tech Chain Infrastructures
      </p>
    </div>
  `
};


  try {
    await transporter.sendMail(mailOptions);

    await transporter.sendMail(userMailOption);

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
