import nodemailer from "nodemailer";

const otpStore = new Map(); // In-memory store

export const sendOTP = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: "Email is required" });

  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  otpStore.set(email, otp.toString());

  try {
    // Setup nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // or any SMTP provider
      auth: {
        user: "abhinavchaurasia355@gmail.com", // 🔁 Replace with your Gmail
        pass: "hrux ikfz buab pmzp",   // 🔁 Use Gmail App Password
      },
    });

    const mailOptions = {
      from: "abhinavchaurasia@gmail.com",
      to: email,
      subject: "CarrerConnect: Your OTP Code",
      html: `<h3>The One Time Password  to is: <strong>${otp}</strong></h3>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully to your email",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to send OTP", error });
  }
};

// Optional: add a verifyOTP controller
export const verifyOTP = (req, res) => {
  const { email, otp } = req.body;
  const storedOtp = otpStore.get(email);
  if (storedOtp === otp) {
    otpStore.delete(email); // OTP used, remove it
    return res.status(200).json({ success: true, message: "OTP verified" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
  }
};

export { otpStore };