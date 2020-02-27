const addCompany = async (body) => {
  try {
    console.log(JSON.stringify(body))
    const resp = await fetch(
      // 'https://blooming-beyond-72124.herokuapp.com/api/send_email',
      'https://united-dreamers-backend.herokuapp.com/createCompany',
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(body),
        // body: body,
        headers: {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    return resp.json();
  } catch (e) {
    return { success: false };
  }
};

const sendEmail = async (body) => {
  try {
    const resp = await fetch('https://blooming-beyond-72124.herokuapp.com/api/send_email', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ 'email': JSON.stringify(body) }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
    paddingTop = "0vh";
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

const determineScreenState = (width) => {
  if (width > 1500) {
    return "wide";
  } else if (width > 1200) {
    return "full";
  } else if (width > 900) {
    return "pacman";
  } else if (width > 700) {
    return "half";
  }
  return "mobile";
}

export {
  sleep,
  addCompany,
  sendEmail,
  handleCustomStylings,
  determineScreenState,
  validateZipCode
};
