import React, { useReducer, useState } from 'react';

import zipcodes from 'zipcodes';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Modal from 'react-responsive-modal';

import { Line } from 'rc-progress';
import { useForm } from "react-hook-form";

import ContactDesign from './contact.png';
import FirstPageFormInput from './FirstPageFormInput';
import ThirdPageFormInput from './ThirdPageFormInput';
import SecondPageFormInput from './SecondPageFormInput';

import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Img from '../../components/Img';
import CenteredSection from '../../components/CenteredSection';

import { sleep, sendEmail, handleCustomStylings, validateZipCode } from './helperFunctions';

import './styles.css';

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: ${props => props.paddingTop};
  text-align: center;
`;

// Issue with form submit that holds onto the previous version of errors so globalErrors is used to stay uop to date with rerenders
let globalErrors = undefined;

const Form = ({ id, width, height, screenState }) => {
  const { handleSubmit, register, errors } = useForm();

  globalErrors = errors;

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      category: 'Other',
      modalFlag: false,
      loading: false,
      modalText: ''
    },
  );
  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
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

  const openModal = () => { setUserInput({ modalFlag: true }); };

  const closeModal = () => { setUserInput({ modalFlag: false }); };

  const validateFormInput = (formInput) => {
    return (
      formInput in userInput &&
      userInput[formInput] !== '' &&
      !(formInput in globalErrors)
    )
  }

  const validateNoError = (formInput) => { return !(formInput in errors) }

  const zipCodeObj = zipcodes.lookup(userInput.zipCode);

  const onFormSubmit = e => {
    // Sleep half a second for nice UX & to wait for globalErrors to be updated
    sleep(500).then(() => {
      if (
        validateNoError('companyFacebookURL') &&
        validateNoError('companyInstagramURL') &&
        validateNoError('companyTwitterURL') &&
        validateFormInput('zipCode') &&
        validateZipCode(zipCodeObj) &&
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
    })
  }

  let {imageMaxWidth, paddingTop, strokeWidth} = handleCustomStylings(screenState, width);

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
        <Line percent={progressPercent} strokeWidth={strokeWidth} strokeColor="#88D5E9" className="progress-bar" />
        <form onSubmit={handleSubmit()}>
          {
            percentStatus === "first" && 
              <FirstPageFormInput 
                handleChange={handleChange}
                register={register}
                errors={errors}
              />
          }
          {
            percentStatus === "second" &&
              <SecondPageFormInput
                userInput={userInput}
                handleChange={handleChange}
                register={register}
                errors={errors}
              />
          }
            {percentStatus === "third" && 
              <ThirdPageFormInput
                zipCodeObj={zipCodeObj}
                userInput={userInput}
                handleChange={handleChange}
                register={register}
                errors={errors}
              />
          }
          <br />
          <button onClick={(e) => onFormSubmit(e, errors)}>{buttonText}</button>
        </form>
      </CenteredSection>
    </SectionWrapper>
  );
};

export default Form;
