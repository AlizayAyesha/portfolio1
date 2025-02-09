// pages/api/contact.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, lastname, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !lastname || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Handle the form submission (e.g., send email or save to database)
    try {
      // Example: sending email or processing data
      console.log('Form data:', { name, email, subject, lastname, message });

      // Simulating success response
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending message:', error);
      return res.status(500).json({ message: 'Failed to send message. Please try again.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
