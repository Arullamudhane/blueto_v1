// // server.js or your backend file
// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "testmailforyoudood@gmail.com",
//     pass: "dram pwno cdvb ilfi",
//   },
// });

// app.post("/send-email", (req, res) => {
//   const { to, subject, text } = req.body;

//   const mailOptions = {
//     from: "your_email@gmail.com",
//     to,
//     subject,
//     text,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).json({ error: error.toString() });
//     }
//     res.status(200).json({ response: info.response });
//   });
// });

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });
