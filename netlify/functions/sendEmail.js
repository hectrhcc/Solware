// netlify/functions/sendEmail.js
import emailjs from 'emailjs-com';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);

  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      data,
      process.env.EMAILJS_PRIVATE_KEY
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
