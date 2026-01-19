import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const emailConfig = {
  from: process.env.SMTP_FROM || "noreply@detatouage-laser.fr",
  to: process.env.SMTP_TO || "leads@detatouage-laser.fr",
};
