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

const handleCustomStylings = (screenState, width) => {
  let [imageMaxWidth, paddingTop, strokeWidth] = [0, "", 1];
  if (screenState === "wide") {
    imageMaxWidth = width * 0.5;
    paddingTop = "1vh";
    strokeWidth = 0.5
  } else if (screenState === "full") {
    imageMaxWidth = width * 0.35;
    paddingTop = "1vh";
    strokeWidth = 0.6
  } else if (screenState === "pacman") {
    imageMaxWidth = width * 0.5;
    paddingTop = "1vh";
    strokeWidth = 0.75;
  } else if (screenState === "half") {
    imageMaxWidth = width * 0.6;
    paddingTop = "7.5vh";
    strokeWidth = 0.9
  } else if (screenState === "mobile") {
    imageMaxWidth = width * 0.8;
    paddingTop = "3vh";
    strokeWidth = 1.5
  }
  return {imageMaxWidth, paddingTop, strokeWidth}
}

const validateZipCode = (zipCodeObj) => { 
  return (
    zipCodeObj !== undefined &&
    'city' in zipCodeObj &&
    'state' in zipCodeObj
  )
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export {
  sleep,
  sendEmail,
  handleCustomStylings,
  validateZipCode
};
