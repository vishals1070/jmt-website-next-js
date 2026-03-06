// Netlify Function to send emails for form submissions
// This function uses the built-in Netlify sendEmail capability or nodemailer

const nodemailer = require('nodemailer');

// Email configuration - Using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body);
    const { formType, data } = payload;

    // Determine email template and recipient based on form type
    let emailContent = '';
    let subject = '';
    const recipientEmail = 'vishals1070@gmail.com';

    if (formType === 'contact') {
      subject = `New Contact Form Submission from ${data.name}`;
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject || 'N/A'}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `;
    } else if (formType === 'quote') {
      subject = `New Quote Request from ${data.name} - ${data.company || 'Individual'}`;
      emailContent = `
        <h2>New Quote Request</h2>
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        
        <h3>Shipment Details</h3>
        <p><strong>Service Type:</strong> ${data.serviceType}</p>
        <p><strong>Type of Goods:</strong> ${data.goodsType}</p>
        <p><strong>Pickup Location:</strong> ${data.pickupLocation}</p>
        <p><strong>Delivery Location:</strong> ${data.deliveryLocation}</p>
        <p><strong>Weight:</strong> ${data.weight || 'N/A'}</p>
        <p><strong>Dimensions:</strong> ${data.dimensions || 'N/A'}</p>
        
        <h3>Additional Information</h3>
        <p>${data.additionalInfo || 'N/A'}</p>
      `;
    }

    // Send email
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: recipientEmail,
        subject: subject,
        html: emailContent,
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};
