import React from 'react';

import zipcodes from 'zipcodes';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Modal from 'react-responsive-modal';

import { Line } from 'rc-progress';

import ContactDesign from './images/UnitedDreamers.png';
import FirstPageFormInput from './FirstPageFormInput';
import ThirdPageFormInput from './ThirdPageFormInput';
import SecondPageFormInput from './SecondPageFormInput';
import CompleteForm from './CompleteForm';

import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Img from '../../components/Img';
import CenteredSection from '../../components/CenteredSection';

import { REQUIRED_INPUTS, REQUIRED_API_FIELDS } from './constants';
import { 
  addCompany,
  sleep, 
  sendEmail,
  handleCustomStylings
} from './helperFunctions';

import './styles.css';

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: ${props => props.paddingTop};
  text-align: center;
`;

class FormBody extends React.Component {
  percentStatus = 'first';

  state = {
    category: 'Accounting',
    companyType: 'Micro Business (1 - 9 employees)',
    loading: false,
    openModal: false,
    modalText: '',
    buttonText1: '',
    buttonText2: 'Next',
    zipCode: '',
    errors: {},
    progressPercent: 0,
    // "firstName": "Julio",
    // "lastName": "Maldonado",
    // "phoneNumber": "9569903738",
    // "emailAddress": "julio.maldonado.guzman@gmail.com",
    // "companyName": "Yeux Technologies",
    // "category": "Technology",
    // "description": "We make fast and efficient websites for minority owned small businesses. We provide website design and development, SEO, mobile app development, logo design, and more at affordable prices because we believe a beautiful website should be a reality for everybody.",
    // "services": "website design and development, SEO, mobile app development, logo design",
    // "companyURL": "https://yeux.tech",
    // "companyFacebookURL": "https://www.facebook.com/yeuxtechnologies/",
    // "companyInstagramUsername": "",
    // "companyTwitterUsername": "",
    // "zipCode": "98109",
    // "city": "Seattle",
    // "state": "Washington",
    // "country": "United States",
    // "companySize": "small business",
  }

  handleChange = ({ evt, regex=null, warningMessage='' }) => {
    let { errors } = this.state;
    const { name, value } = evt.target;
    if (regex) {
      if (!value.toLowerCase().match(regex))
        errors[name] = { message: warningMessage };
      else
        delete errors[name];
      }
    this.setState({ [name]: value, errors });
  };

  updateProgress = (progress) => {
    if (progress === 'forward') {
      if (this.state.progressPercent === 66) {
        this.setState({
          buttonText1: '',
          buttonText2: '',
          progressPercent: this.state.progressPercent + Math.round(5/15 * 100)
        });
      } else {
        this.setState({
          buttonText1: 'Previous',
          buttonText2: 'Next',
          progressPercent: this.state.progressPercent + Math.round(5/15 * 100)
        });
      }
    } else if (progress === 'reverse') {
      if (this.state.progressPercent === 33) {
        this.setState({
          buttonText1: '',
          buttonText2: 'Next',
          progressPercent: this.state.progressPercent - Math.round(5/15 * 100)
        });
      } else {
        this.setState({
          buttonText1: 'Previous',
          buttonText2: 'Next',
          progressPercent: this.state.progressPercent - Math.round(5/15 * 100)
        });
      }
    }
  }

  openModal = () => {
    // setUserInput({ modalFlag: true });
  };

  closeModal = () => {
    // setUserInput({ modalFlag: false });
  };

  validateFormInput = (formInput, userInput) => {
    return (
      userInput !== undefined &&
      formInput in userInput &&
      userInput[formInput] !== '' &&
      !(formInput in this.state.errors)
    );
  }

  validateNoError = (formInput) => { return !(formInput in this.state.errors) }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1].focus();
    }
  }

  onFormSubmit = (e, direction) => {
    this.setState({ loading: true });
    e.preventDefault();
    if (direction === 'reverse' && this.percentStatus !== 'first') {
      this.updateProgress(direction);
      this.setState({ loading: false });
      return;
    }

    // Sleep half a second for nice UX & to wait for globalErrors to be updated
    sleep(500).then(() => {
      this.setState({ loading: false });
      let userInput = this.state;
      let { errors } = this.state;
      REQUIRED_INPUTS[this.percentStatus].forEach(requiredField => {
        if (!(requiredField in userInput))
          errors[requiredField] = { message: 'Required' };
        else if (userInput[requiredField] === '')
          errors[requiredField] = { message: 'Required' };
        else
          delete errors[requiredField];
      });
      this.setState({ errors });

      if (
        this.percentStatus === 'third' &&
        this.validateNoError('companyFacebookURL') &&
        this.validateNoError('companyInstagramURL') &&
        this.validateNoError('companyTwitterURL') &&
        this.validateFormInput('zipCode', this.state) &&
        this.validateFormInput('state', this.zipCodeObj) &&
        this.validateFormInput('city', this.zipCodeObj)
      ) {
        this.updateProgress(direction);
        console.log('over here')
        REQUIRED_API_FIELDS.forEach(requiredField => {
          if (!(requiredField in userInput)) {
            userInput[requiredField] = '';
          }
        })
        console.log({...userInput, ...this.zipCodeObj})
        addCompany({...userInput, ...this.zipCodeObj}).then(({ success }) => {
          // setUserInput({ loading: false });
          // openModal();
          if (success) {
            console.log('Success')
            // setUserInput({ modalText: 'Email successfully sent!' });
          } else {
            sendEmail({...userInput, ...this.zipCodeObj})
            console.log('failure')
            // setUserInput({
            //   modalText: 'Email was not sent out...try again later.',
            // });
          }
        });
        return;
      }

      if (
        this.percentStatus === 'second' &&
        this.validateFormInput('description', this.state) &&
        this.validateFormInput('services', this.state) &&
        this.validateFormInput('category', this.state)
      ) {
        this.updateProgress(direction);
        return;
      }

      if (
        this.percentStatus === 'first' &&
        this.validateFormInput('firstName', this.state) &&
        this.validateFormInput('lastName', this.state) &&
        this.validateFormInput('emailAddress', this.state) &&
        this.validateNoError('phoneNumber') &&
        this.validateFormInput('companyName', this.state)
      ) {
        this.updateProgress(direction);
        return;
      }

      return;
    });
  }

  render() {
    const { width, height, screenState } = this.props;
    this.zipCodeObj = zipcodes.lookup(this.state.zipCode);
    let { buttonText1, buttonText2, progressPercent } = this.state;
    let { imageMaxWidth, paddingTop, strokeWidth } = handleCustomStylings(screenState, width);

    if (progressPercent === 0)
      this.percentStatus = 'first';
    else if (progressPercent === 33)
      this.percentStatus = 'second';
    else if (progressPercent === 66)
      this.percentStatus = 'third';
    else if (progressPercent === 99)
      this.percentStatus = 'done';
      // buttonText = 'Done!'
      // TODO: make API call

    if (progressPercent) progressPercent += 1;

    return (
      <SectionWrapper paddingTop={paddingTop}>
        <CenteredSection height={height}>
          <H1>United Dreamers</H1>
          <H4>Supporting each other as DACA recipients</H4>
          <Img
            className='no-margin'
            src={ContactDesign}
            alt='Yeux_contact_image'
            style={{
              maxHeight: height,
              maxWidth: imageMaxWidth,
              width: 'auto',
              height: 'auto',
            }}
          />
          <Line percent={progressPercent} strokeWidth={strokeWidth} strokeColor='#88D5E9' className='progress-bar' />
          <br/>
          {
            this.percentStatus === 'first' &&
              <i>Please fill out this form if you're a Dreamer and a business owner.</i>
          }
          {
            this.percentStatus === 'second' &&
              <i>Please select the category and type of your company, give a brief description of your company, your services separated by a comma, and your company website if available.</i>
          }
          {
            this.percentStatus === 'third' &&
              <i>Please provide your companies Facebook link (if available), Instagram or Twitter username (if available), and your company's zip code.</i>
          }
          {
            this.percentStatus === 'done' &&
              <i>¡Muchas gracias!</i>
          }
          <form noValidate>
            {
              this.percentStatus === 'first' &&
                <FirstPageFormInput
                  userInput={this.state}
                  handleChange={this.handleChange}
                  errors={this.state.errors}
                  handleKeyPress={this.handleKeyPress}
                />
            }
            {
              this.percentStatus === 'second' &&
                <SecondPageFormInput
                  userInput={this.state}
                  handleChange={this.handleChange}
                  handleKeyPress={this.handleKeyPress}
                  errors={this.state.errors}
                />
            }
            {
              this.percentStatus === 'third' &&
                <ThirdPageFormInput
                  zipCodeObj={this.zipCodeObj}
                  userInput={this.state}
                  handleChange={this.handleChange}
                  handleKeyPress={this.handleKeyPress}
                  errors={this.state.errors}
                />
            }
            <br />
            {
              buttonText1 &&
                <button style={{marginRight: buttonText2 ? '5vw' : 0}} onClick={(e) => this.onFormSubmit(e, 'reverse')}>{buttonText1}</button>
            }
            {
              buttonText2 &&
                <button style={{marginLeft: buttonText1 ? '5vw' : 0}} onClick={(e) => this.onFormSubmit(e, 'forward')}>{buttonText2}</button>
            }
          </form>
          {
            this.percentStatus === 'done' &&
              <CompleteForm
                zipCodeObj={this.zipCodeObj}
                userInput={this.state}
              />
          }
          {/* <Modal open={this.state.alreadySignedUpModal} onClose={this.alreadySignedUpModalClose} center>
            <br />
            <br />
            <center><h2>You've already signed up friend :)</h2></center>
            <br />
            <center><b>Connect on social media</b></center>
            <br />
            <br />
            <ul
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                margin: 'auto',
                bottom: '10%',
              }}
              className="icons"
            >
              {socialData.map(s => (
                <li key={s.label}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={s.icon} color={s.color} />
                  </a>
                </li>
              ))}
            </ul>
          </Modal> */}
          {this.state.loading
          ? <div>
              <div style={{
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
              <div style={{
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
          : null
        }
        </CenteredSection>
      </SectionWrapper>
    );
  }
};

FormBody.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  screenState: PropTypes.string.isRequired
}

export default FormBody;
