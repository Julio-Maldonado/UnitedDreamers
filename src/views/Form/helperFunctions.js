const sendEmail = async ({ name, emailAddress, subject, message }) => {
  try {
    const resp = await fetch(
      'https://blooming-beyond-72124.herokuapp.com/api/send_email',
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({ name, emailAddress, subject, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return resp.json();
  } catch (e) {
    return { success: false };
  }
};

export { sendEmail };