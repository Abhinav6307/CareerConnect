import nodemailer from "nodemailer";
import { resetPasswordMailTemplate } from "./mailTemplates.js";

export const sendMail = async (to, resetURL) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"CareerConnect Support" <${process.env.MAIL_ID}>`,
        to,
        subject: "Reset Your Password - CareerConnect",
        html: resetPasswordMailTemplate(resetURL),
    };

    await transporter.sendMail(mailOptions);
};
