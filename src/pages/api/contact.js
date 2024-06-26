import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, option, message } = req.body;

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient-email@example.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Option: ${option}
        Message: ${message}
      `,
    };

    try {
      // Envoyer l'email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
