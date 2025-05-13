// netlify/functions/sendEmail.js

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
         statusCode: 405,
         body: JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    };
  }

  const data = JSON.parse(event.body);

  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  try {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      service_id: serviceID,
      template_id: templateID,
      user_id: privateKey,
      template_params: data
    })
  });

  const contentType = response.headers.get('content-type');
  const responseBody = await response.text(); // SIEMPRE primero como texto

  let parsedResponse = null;
  if (contentType && contentType.includes('application/json')) {
    parsedResponse = JSON.parse(responseBody);
  }

  if (!response.ok) {
    const errorMessage = parsedResponse?.error || responseBody || 'Error desconocido';
    throw new Error(errorMessage);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, result: parsedResponse || responseBody })
  };
} catch (error) {
  return {
    statusCode: 500,
    body: JSON.stringify({ success: false, error: error.message || 'Error inesperado' })
  };
}

}
