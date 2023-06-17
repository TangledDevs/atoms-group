import nodemailer from "nodemailer";
export const sendMail = async (req, res) => {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "guestcountforr3@gmail.com",
        pass: "Guest1234567",
      },
    });

    // Email details
    const mailOptions = {
      from: req.email,
      to: "guestcountforr3@gmail.com",
      subject: "Testing Nodemailer with Gmail",
      text: "Hello from Node.js!",
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occurred while sending email:", error.message);
      } else {
        console.log("Email sent successfully!");
        console.log("Message ID:", info.messageId);
      }
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
