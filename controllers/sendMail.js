import nodemailer from "nodemailer";
export const sendMail = async (req,res) => {
  console.log(`Content in request Body :`,req.body)
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vijaykumarreddytalakola@gmail.com",
        pass: "nusaxvkoulwuntrt",
      },
    });

    // Email details
    const mailOptions = {
      from: "vijaykumarreddytalakola@gmail.com",
      to: req.body.email,
      subject: "Message from Atoms",
      text: req.body.message,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log("Error occurred while sending email:", error.message);
      } else {
        console.log("Email sent successfully from server!");
        res.status(200).json({ message: "Email sent successfully from atoms" });
      }
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
