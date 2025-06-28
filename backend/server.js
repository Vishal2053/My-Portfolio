const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config({ path: '.env.local' });

const emailPass = process.env.EMAIL_PASS;
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio Contact API');
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email transport (use your real credentials)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vishalbhagwanmore12@gmail.com',      // your email
      pass: emailPass,       // your email password or app password
    },
  });

  let mailOptions = {
    from: email,
    to: 'vishalbhagwanmore12@gmail.com',          // your email to receive messages
    subject: `Portfolio Contact from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email.', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));