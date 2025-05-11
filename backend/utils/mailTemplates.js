// utils/mailTemplates.js

export const resetPasswordMailTemplate = (resetURL) => {
    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7;">
        <div style="max-width: 600px; margin: auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333;">Reset Your Password</h2>
            <p style="font-size: 16px; color: #555;">We received a request to reset your password. Click the button below to proceed:</p>
            <a href="${resetURL}" style="display: inline-block; margin-top: 20px; background-color: #007bff; color: white; text-decoration: none; padding: 12px 24px; border-radius: 5px; font-weight: bold;">Reset Password</a>
            <p style="font-size: 14px; color: #888; margin-top: 30px;">If you didn’t request this, please ignore this email.</p>
        </div>
    </div>
    `;
};
