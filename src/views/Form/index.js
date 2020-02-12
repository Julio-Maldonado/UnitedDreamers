import React, { useReducer, useState } from 'react';

import Modal from 'react-responsive-modal';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Zip from 'react-zipcode';
import { Line } from 'rc-progress';

import { sendEmail } from './helperFunctions';

import H1 from '../../components/H1';
// import H2 from '../../components/H2';
// import H3 from '../../components/H3';
import H4 from '../../components/H4';
import Img from '../../components/Img';
import ContactDesign from './contact.png';
import CenteredSection from '../../components/CenteredSection';

import './styles.css';

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: ${props => props.paddingTop};
`;

const Form = ({ id, width, height, screenState }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      emailAddress: '',
      category: 'General Question',
      message: '',
      modalFlag: false,
      loading: false,
      modalText: ''
    },
  );

  const handleChange = evt => {
    const { name } = evt.target;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
  };

  let [progressPercent, setCount] = useState(0);

  const updateProgress = (progress) => {
    if (progress === "up") setCount(progressPercent + Math.round(5/15 * 100))
    else if (progress === "down" ) setCount(progressPercent - Math.round(5/15 * 100))
  }

  let [percentStatus, buttonText] = ["first", "Next"];
  if (progressPercent === 33) { percentStatus = "second"; }
  else if (progressPercent === 66) { percentStatus = "third"; }
  else if (progressPercent === 100) {
    progressPercent += 1
    percentStatus = "done";
    buttonText = "Done!"
    // TODO: make API call
  }
  console.log({progressPercent})
  console.log({percentStatus})

  const validateFormInput = (formInput) => {
    console.log({formInput})
    return (
      ((formInput in userInput) &&
      userInput[formInput] !== '') &&
      document.forms['myForm'][formInput].checkValidity()
    )
  }

  const onFormSubmit = e => {
    console.log({userInput})
    console.log(document.forms["myForm"]["emailAddress"].checkValidity());
    if (
      validateFormInput('companyFacebookURL') &&
      validateFormInput('companyInstagramURL') &&
      validateFormInput('companyTwitterURL') &&
      validateFormInput('zipCode') &&
      validateFormInput('companyState') &&
      validateFormInput('companyCity') &&
      percentStatus === "third"
      // (('companyFacebookURL' in userInput) && userInput['companyFacebookURL'] !== '') &&
      // (('companyInstagramURL' in userInput) && userInput['companyInstagramURL'] !== '') &&
      // (('companyTwitterURL' in userInput) && userInput['companyTwitterURL'] !== '') &&
      // (('zipCode' in userInput) && userInput['zipCode'] !== '') &&
      // (('companyState' in userInput) && userInput['companyState'] !== '') &&
      // (('companyCity' in userInput) && userInput['companyCity'] !== '') && 
      // percentStatus === "third"
    ) {
      updateProgress();
      e.preventDefault();
      return;
    }

    if (
      validateFormInput('description') &&
      validateFormInput('services') &&
      validateFormInput('companyURL') &&
      validateFormInput('category') &&
      percentStatus === "second"
      // (('category' in userInput) && userInput['category'] !== '') &&
      // (('description' in userInput) && userInput['description'] !== '') &&
      // (('services' in userInput) && userInput['services'] !== '') &&
      // (('companyURL' in userInput) && userInput['companyURL'] !== '') && 
      // percentStatus === "second"
    ) {
      updateProgress();
      e.preventDefault();
      return;
    }

    if (
      validateFormInput('firstName') &&
      validateFormInput('lastName') &&
      validateFormInput('emailAddress') &&
      validateFormInput('phoneNumber') &&
      validateFormInput('companyName') &&
      percentStatus === "first"
      // (('firstName' in userInput) && userInput['firstName'] !== '') &&
      // (('lastName' in userInput) && userInput['lastName'] !== '') &&
      // (('emailAddress' in userInput) && userInput['emailAddress'] !== '') &&
      // (('phoneNumber' in userInput) && userInput['phoneNumber'] !== '') &&
      // (('companyName' in userInput) && userInput['companyName'] !== '') && 
      // percentStatus === "first"
    ) {
      updateProgress();
      e.preventDefault();
      return;
    } else {
      // e.preventDefault();
      return;
      setUserInput({ loading: true });
      // sendEmail(userInput).then(({ success }) => {
      //   setUserInput({ loading: false });
      //   openModal();
      //   if (success) {
      //     setUserInput({ modalText: 'Email successfully sent!' });
      //   } else {
      //     setUserInput({
      //       modalText: 'Email was not sent out...try again later.',
      //     });
      //   }
      // });
    }
  };

  const openModal = () => {
    setUserInput({ modalFlag: true });
  };

  const closeModal = () => {
    setUserInput({ modalFlag: false });
  };

  let [imageMaxWidth, paddingTop] = [0, ""];
  if (screenState === "wide") {
    imageMaxWidth = width * 0.5;
    paddingTop = "1vh";
  } else if (screenState === "full") {
    imageMaxWidth = width * 0.35;
    paddingTop = "1vh";
  } else if (screenState === "pacman") {
    imageMaxWidth = width * 0.5;
    paddingTop = "1vh";
  } else if (screenState === "half") {
    imageMaxWidth = width * 0.6;
    paddingTop = "7.5vh";
  } else if (screenState === "mobile") {
    imageMaxWidth = width * 0.8;
    paddingTop = "3vh";
  }

  const handleClick = (e) => { if (e) {e.preventDefault()}; }

  return (
    <SectionWrapper id={id} paddingTop={paddingTop}>
      <CenteredSection height={height}>
      <div
          className="no-margin"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        </div>
        <H1>United Dreamers</H1>
        <H4>Supporting each other as DACA recipients</H4>
        <Img
          className="no-margin"
          src={ContactDesign}
          alt="Yeux_contact_image"
          style={{
            maxHeight: height,
            maxWidth: imageMaxWidth,
            width: 'auto',
            height: 'auto',
          }}
        />
        <Line percent={progressPercent} strokeWidth="1" strokeColor="#88D5E9" className="progress-bar" />
        <form name="myForm" style={{ marginBottom: '1vh' }}>
          {percentStatus === "first" ? 
            (
            <ul className="form-style-1">
              <li>
                <input
                  type="text"
                  name="firstName"
                  className="field-divided"
                  placeholder="First Name"
                  value={userInput.firstName}
                  onChange={handleChange}
                  required
                />{' '}
                <input
                  type="text"
                  name="lastName"
                  className="field-divided"
                  placeholder="Last Name"
                  value={userInput.lastName}
                  onChange={handleChange}
                  required
                />
              </li>
              <li>
                <input
                  type="email"
                  name="emailAddress"
                  className="field-divided"
                  placeholder="Email Address"
                  value={userInput.emailAddress}
                  onChange={handleChange}
                  required
                />{' '}
                <input
                  id="tel"
                  type="tel"
                  name="phoneNumber"
                  className="field-divided"
                  placeholder="Phone # (123-456-7890)"
                  title="123-456-7890"
                  value={userInput.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  name="companyName"
                  className="field-long"
                  placeholder="Your Company's Name"
                  value={userInput.companyName}
                  onChange={handleChange}
                  required
                />
              </li>
            </ul>
            )
            :
            null
          }
          {percentStatus === "second" ? 
            (
              <ul className="form-style-1">
                <li>
                  {userInput.companyName}<br/>
                  Category
                  <select
                    id="select"
                    name="category"
                    className="field-select"
                    defaultValue="Company Category"
                    onChange={handleChange}
                  >
                    <option value="Construction">Construction</option>
                    <option value="Cosmetics">Cosmetics</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Food and Drinks">Food and Drinks</option>
                    <option value="Health Care">Health Care</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Technology">Technology</option>
                    <option value="Other">Other</option>
                  </select>
                </li>
                <li>
                  <textarea
                    name="description"
                    id="description"
                    className="field-long field-textarea"
                    placeholder="Brief Company Description"
                    value={userInput.description}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="services"
                    className="field-long"
                    placeholder="Your Company's Services (i.e. haircuts, real estate, software development, construction)"
                    value={userInput.services}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <input
                    type="url"
                    name="companyURL"
                    className="field-long"
                    placeholder="Company Website"
                    value={userInput.companyURL}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>)
              :
            null
          }
          {percentStatus === "third" ? 
            (
              <ul className="form-style-1">
                <li>
                  <input
                    type="text"
                    name="companyFacebookURL"
                    className="field-long"
                    placeholder="Company Facebook"
                    value={userInput.companyFacebookURL}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="companyInstagramURL"
                    className="field-long"
                    placeholder="Company Instagram"
                    value={userInput.companyInstagramURL}
                    onChange={handleChange}
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="companyTwitterURL"
                    className="field-long"
                    placeholder="Company Twitter"
                    value={userInput.companyTwitterURL}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  {/* <input
                    type="text"
                    name="companyZipCode"
                    className="field-long"
                    placeholder="Company Zip Code"
                    value={userInput.companyZipCode}
                    onChange={handleChange}
                    
                  /> */}
                  <Zip
                    type="text"
                    name="zipCode"
                    onValue={(value) => console.log(`validated zip code: ${value}`)}
                    className="field-long"
                    placeholder="Company Zip Code"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="companyCity"
                    className="field-divided"
                    placeholder="Company City"
                    value={userInput.companyCity}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="companyState"
                    className="field-divided"
                    placeholder="Company State"
                    value={userInput.companyState}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>
              )
              :
              null
            }

            <button onClick={ (e) => onFormSubmit(e)}>{buttonText}</button>
            {/* <li>
              <input type="submit" value="Submit" />
            </li> */}
        </form>
        <Modal open={userInput.modalFlag} onClose={closeModal} center>
          <br />
          <br />
          <center>
            <h2>{userInput.modalText}</h2>
          </center>
        </Modal>
        {userInput.loading ? (
          <div>
            <div
              style={{
                position: 'fixed',
                left: '0vw',
                top: '0vh',
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                backgroundColor: '#FFFFFF',
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: 'fixed',
                translate: "translate('-50%', '-50%')",
                left: '45vw',
                top: '15vh',
                zIndex: 9999,
              }}
            >
              <Loader
                type="ThreeDots"
                color="black"
                height="10vh"
                width="10vw"
              />
            </div>
          </div>
        ) : null}
      </CenteredSection>
    </SectionWrapper>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  screenState: PropTypes.string.isRequired,
};

export default Form;
