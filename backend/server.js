import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// ROOT ROUTE

app.get("/", (req, res) => {
  res.send("Portfolio backend running ✅");
});


// NODEMAILER TRANSPORTER

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});


// VERIFY SMTP CONNECTION

transporter.verify((error) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server Ready ✅");
  }
});


// CONTACT ROUTE

app.post("/api/contact", async (req, res) => {
  console.log("Incoming request:", req.body);

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, subject and message are required.",
    });
  }

  try {
    const mailOptions = {
      from: process.env.SMTP_USER,

      to: process.env.RECEIVER_EMAIL,

      replyTo: email,

      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Portfolio Message 🚀</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone || "N/A"}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <p><strong>Message:</strong></p>

          <div style="
            background:#f4f4f4;
            padding:15px;
            border-radius:10px;
          ">
            ${message}
          </div>
        </div>
      `,
    };

    // SEND EMAIL
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully ✅");

    res.status(200).json({
      success: true,
      message: "Message sent successfully ✅",
    });

  } catch (error) {
    console.error("Mail Error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to send message",
    });
  }
});


// START SERVER

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});