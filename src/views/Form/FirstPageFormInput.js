import React from 'react';
import PropTypes from 'prop-types';

import { REGEX_PATTERNS } from './constants';

const FirstPageFormInput = ({ handleChange, errors, userInput, handleKeyPress }) => (
  <ul className='form-style-1'>
    <li>
      <input
        name='firstName'
        className='field-divided'
        placeholder='First Name'
        onKeyDown={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.nameNoSpaces,
          warningMessage: 'Use a real first name'
        })}
        value={userInput.firstName}
        formNoValidate
        autoFocus
      />
      <br/>
      <b>{errors.firstName && errors.firstName.message}</b>
    </li>
    <li>
      <input
        name='lastName'
        className='field-divided'
        placeholder='Last Name'
        onKeyDown={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.nameNoSpaces,
          warningMessage: 'Use a real last name'
        })}
        value={userInput.lastName}
        formNoValidate
      />
      <br/>
      <b>{errors.lastName && errors.lastName.message}</b>
    </li>
    <li>
      <input
        name='emailAddress'
        className='field-divided'
        placeholder='Email Address'
        onKeyDown={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.emailAddress,
          warningMessage: 'Invalid email address'
        })}
        value={userInput.emailAddress}
        formNoValidate
      />
      <br/>
      <b>{errors.emailAddress && errors.emailAddress.message}</b>
    </li>
    <li>
      <input
        name='phoneNumber'
        className='field-divided'
        placeholder='Phone Number'
        onKeyDown={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.phoneNumber,
          warningMessage: 'Invalid phone number'
        })}
        value={userInput.phoneNumber}
        formNoValidate
      />
      <br/>
      <b>{errors.phoneNumber && errors.phoneNumber.message}</b>
    </li>
    <li>
      <input
        name='companyName'
        className='field-divided'
        placeholder='Company Name'
        onKeyDown={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.anyText,
          warningMessage: 'Invalid company name'
        })}
        value={userInput.companyName}
        formNoValidate
      />
      <br/>
      <b>{errors.companyName && errors.companyName.message}</b>
    </li>
  </ul>          
)

FirstPageFormInput.propTypes = {
  errors: PropTypes.object.isRequired,
  userInput: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired
}

export default FirstPageFormInput;
