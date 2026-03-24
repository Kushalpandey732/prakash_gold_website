const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "Prakash Gold API" });
});

app.post("/api/enquiry", async (req, res) => {
  const { name, email, phone, schedule } = req.body;

  if (!name || !email || !phone || !schedule) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(200).json({
      message:
        "Enquiry received. Configure SMTP_USER and SMTP_PASS to enable emails.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: "New Enquiry - Prakash Gold",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchedule: ${schedule}`,
    });

    return res.status(200).json({ message: "Enquiry submitted successfully." });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to process enquiry right now.",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
