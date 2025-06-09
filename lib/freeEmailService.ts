// libs/freeEmailService.ts

import nodemailer from 'nodemailer';

/**
 * Sends an alert email using Nodemailer with Yahoo's SMTP service.
 * This function is intended for internal alerts, such as new waitlist subscriptions.
 *
 * IMPORTANT: You MUST generate an App Password for your Yahoo Mail account
 * and use it in YAHOO_EMAIL_APP_PASSWORD. Your regular Yahoo password will NOT work.
 * Go to Yahoo Mail security settings to generate one.
 *
 * @param {object} params - The email parameters.
 * @param {string} params.to - The recipient email address (e.g., "info@newcondo.homes").
 * @param {string} params.subject - The subject of the email.
 * @param {string} params.text - The plain text body of the email.
 * @returns {Promise<{ success: boolean; message?: string }>} A promise that resolves with the sending status.
 */
export async function sendAlertEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}): Promise<{ success: boolean; message?: string }> {
  // Ensure Yahoo email credentials are set
  if (!process.env.YAHOO_EMAIL_USER || !process.env.YAHOO_EMAIL_APP_PASSWORD) {
    console.error("Yahoo email user or app password is not set. Cannot send alert email.");
    return { success: false, message: "Yahoo email credentials are missing." };
  }

  // Create a Nodemailer transporter using Yahoo's SMTP settings
  // Port 465 is commonly used for SMTPS (SMTP over SSL/TLS)
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465, // Use 465 for SMTPS (secure)
    secure: true, // true for 465, false for other ports (like 587)
    auth: {
      user: process.env.YAHOO_EMAIL_USER, // Your Yahoo email address
      pass: process.env.YAHOO_EMAIL_APP_PASSWORD, // Your generated Yahoo App Password
    },
    // Optional: Add logging for debugging
    // logger: true,
    // debug: true,
  });

  const mailOptions = {
    from: process.env.YAHOO_EMAIL_USER, // Sender address (must be your Yahoo email)
    to: to,
    subject: subject,
    text: text,
    // html: '<p>HTML version of the alert email</p>', // You can also send HTML if needed
  };

  try {
    // Send the email using the configured transporter
    const info = await transporter.sendMail(mailOptions);
    console.log(`Alert email sent to ${to} via Nodemailer (Yahoo). Message ID: ${info.messageId}`);
    return { success: true, message: "Alert email sent successfully via Nodemailer (Yahoo)." };
  } catch (error: any) {
    console.error("Error sending alert email via Nodemailer (Yahoo):", error);
    return { success: false, message: `Failed to send alert email via Nodemailer (Yahoo): ${error.message}` };
  }
}
