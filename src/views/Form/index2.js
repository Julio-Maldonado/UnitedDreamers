import React, { useReducer, useState } from 'react';

import Modal from 'react-responsive-modal';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';

import { sendEmail } from './helperFunctions';
import { REQUIRED_FIELDS } from './constants';

import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Img from '../../components/Img';
import ContactDesign from './contact.png';
import CenteredSection from '../../components/CenteredSection';

import zipcodes from 'zipcodes';

import './styles.css';

import { useForm } from "react-hook-form";

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: ${props => props.paddingTop};
  text-align: center;
`;

const Example = ({ id, width, height, screenState }) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      // firstName: '',
      // lastName: '',
      // emailAddress: '',
      category: 'Other',
      // message: '',
      companyName: 'Yeux',
      modalFlag: false,
      loading: false,
      modalText: '',
      zipCode: ''
    },
  );

  const handleChange = evt => {
    const { name } = evt.target;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
  };

  let [progressPercent, setCount] = useState(0);
  const updateProgress = (progress) => {
    if (progress === "forward") setCount(progressPercent + Math.round(5/15 * 100))
    else if (progress === "reverse" ) setCount(progressPercent - Math.round(5/15 * 100))
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

  const openModal = () => {
    setUserInput({ modalFlag: true });
  };

  const closeModal = () => {
    setUserInput({ modalFlag: false });
  };

  const validateFormInput = (formInput) => {
    console.log({formInput})
    console.log({userInput})
    console.log({errors})
    return (
      formInput in userInput &&
      userInput[formInput] !== '' &&
      !(formInput in errors)
    )
  }

  const validateNoError = (formInput) => {
    return (
      !(formInput in errors)
    )
  }

  const zipCodeObj = zipcodes.lookup(userInput.zipCode);
  console.log(zipCodeObj)

  const onFormSubmit = e => {
    console.log({userInput})
    // console.log(document.forms["myForm"]["emailAddress"].checkValidity());
    if (
      validateNoError('companyFacebookURL') &&
      validateNoError('companyInstagramURL') &&
      validateNoError('companyTwitterURL') &&
      validateFormInput('zipCode') &&
      zipCodeObj !== undefined &&
      'city' in zipCodeObj &&
      'state' in zipCodeObj &&
      // validateFormInput('companyState') &&
      // validateFormInput('companyCity') &&
      percentStatus === "third"
    ) {
      updateProgress("forward");
      e.preventDefault();
      return;
    }

    if (
      validateFormInput('description') &&
      validateFormInput('services') &&
      validateFormInput('category') &&
      percentStatus === "second"
    ) {
      updateProgress("forward");
      e.preventDefault();
      return;
    }

    if (
      validateFormInput('firstName') &&
      validateFormInput('lastName') &&
      validateFormInput('emailAddress') &&
      validateNoError('phoneNumber') &&
      validateFormInput('companyName') &&
      percentStatus === "first"
    ) {
      updateProgress("forward");
      e.preventDefault();
      return;
    }

    console.log("no update made")
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

  console.log('errors.zipCode =', errors.zipCode)

  return (
    <SectionWrapper id={id} paddingTop={paddingTop}>
      <CenteredSection height={height}>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {percentStatus === "first" ? 
            (
            <ul className="form-style-1">
              <li>
                <input
                  name="firstName"
                  type="hidden"
                  value="something"
                  className="field-divided"
                  placeholder="First Name"
                  onChange={handleChange}
                  formNoValidate
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
                      message: "Use a real first name"
                    }
                  })}
                />
                <br/><b>{errors.firstName && errors.firstName.message}</b>

              </li>
              <li>
                <input
                  name="lastName"
                  className="field-divided"
                  placeholder="Last Name"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
                      message: "Use a real last name"
                    }
                  })}
                />
                <br/><b>{errors.lastName && errors.lastName.message}</b>

              </li>
              <li>
                <input
                  name="emailAddress"
                  className="field-divided"
                  placeholder="Email Address"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                <br/><b>{errors.emailAddress && errors.emailAddress.message}</b>

              </li>
              <li>
                <input
                  name="phoneNumber"
                  className="field-divided"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    pattern: {
                      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                      message: "Invalid phone number"
                    }
                  })}
                />
                <br/><b>{errors.phoneNumber && errors.phoneNumber.message}</b>

              </li>
              <li>
                <input
                  name="companyName"
                  className="field-divided"
                  placeholder="Company Name"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/,
                      message: "Invalid company name"
                    }
                  })}
                />
                <br /><b>{errors.companyName && errors.companyName.message}</b>

              </li>
            </ul>
            )
            :
            null
          }
          {percentStatus === "second" ? 
            (
            <ul className="form-style-1">
              <br />
              <b>{userInput.companyName}</b>
              <li>
                <p className="field-divided">Category</p>
                <select
                  id="select"
                  name="category"
                  className="field-divided"
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
                  className="field-long field-textarea"
                  placeholder="Brief Company Description"
                  // value={userInput.description}
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    required: 'Required'
                  })}
                />
                <br/><b>{errors.description && errors.description.message}</b>
              </li>
              <li>
                <input
                  name="services"
                  className="field-long"
                  placeholder="Your Company's Services (i.e. haircuts, real estate, software development, construction)"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    required: 'Required'
                  })}
                />
                <br/><b>{errors.services && errors.services.message}</b>

              </li>
              <li>
                <input
                  name="companyURL"
                  className="field-long"
                  placeholder="Company Website (www.companywebsite.com)"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    pattern: {
                      value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
                      message: "Invalid URL"
                    }
                  })}
                />
                <br/><b>{errors.companyURL && errors.companyURL.message}</b>
              </li>
            </ul>
            )
            :
            null
          }
          {percentStatus === "third" ? 
            (
            <ul className="form-style-1">
              <br />
              <b>{userInput.companyName}</b>
              <li>
                <input
                  name="companyFacebookURL"
                  className="field-long"
                  placeholder="Company Facebook Link"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    pattern: {
                      value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
                      message: "Invalid Facebook Link"
                    }
                  })}
                />
                <br/><b>{errors.companyFacebookURL && errors.companyFacebookURL.message}</b>
              </li>
              <li>
                <input
                  name="companyInstagramUsername"
                  className="field-long"
                  placeholder="Company Instagram Username"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    pattern: {
                      value: /[a-z]\d?/gi,
                      message: "Invalid Instagram username"
                    }
                  })}
                />
                <br/><b>{errors.companyInstagramUsername && errors.companyInstagramUsername.message}</b>
              </li>
              <li>
                <input
                  name="companyTwitterUsername"
                  className="field-long"
                  placeholder="Company Twitter Username"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    pattern: {
                      value: /[a-z]\d?/gi,
                      message: "Invalid Twitter username"
                    }
                  })}
                />
                <br/><b>{errors.companyTwitterUsername && errors.companyTwitterUsername.message}</b>
              </li>
              <li>
                <input
                  name="zipCode"
                  placeholder="Zip Code"
                  onChange={handleChange}
                  formNoValidate
                  autoComplete={"new-password"}
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^\d{5}$|^\d{5}-\d{4}$/,
                      message: "Invalid Zip Code"
                    }
                  })}
                />
                {errors.zipCode ?
                  <b>{errors.zipCode.message}</b>
                  :
                  ((zipCodeObj !== undefined) && ('city' in zipCodeObj) && ('state' in zipCodeObj)) ?
                    <p className="center-p">{zipCodeObj.city}, {zipCodeObj.state} {zipCodeObj.country} </p>
                    :
                    (zipCodeObj !== undefined && 'zip' in zipCodeObj && zipCodeObj.zip.length === 5) ?
                    <b>Invalid Zip Code</b>
                    :
                    (zipCodeObj === undefined && userInput.zipCode.length === 5) ?
                      <b>Invalid US Zip Code</b>
                      :
                      null
                }
              </li>
            </ul>
            )
            :
            null
          }
          <br />
          <button onClick={ (e) => onFormSubmit(e)}>{buttonText}</button>
        </form>
      </CenteredSection>
    </SectionWrapper>
  );
};

export default Example