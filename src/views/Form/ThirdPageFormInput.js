import React from 'react';
import PropTypes from 'prop-types';

import { REGEX_PATTERNS } from './constants';

const ThirdPageFormInput = ({ userInput, handleChange, handleKeyPress, errors, zipCodeObj }) => (
  <ul className="form-style-1">
    <br />
    <b>{userInput.companyName}</b>
    <li>
      <input
        name="companyFacebookURL"
        className="field-long"
        placeholder="Company Facebook Link"
        handleKeyPress={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.website,
          warningMessage: "Invalid Facebook Link"
        })}
        value={userInput.companyFacebookURL}
        formNoValidate
        autoFocus
      />
      <br/><b>{errors.companyFacebookURL && errors.companyFacebookURL.message}</b>
    </li>
    <li>
      <input
        name="companyInstagramUsername"
        className="field-long"
        placeholder="Company Instagram Username"
        handleKeyPress={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.socialUsername,
          warningMessage: "Invalid Instagram username"
        })}
        value={userInput.companyInstagramUsername}
        formNoValidate
      />
      <br/>
      <b>{errors.companyInstagramUsername && errors.companyInstagramUsername.message}</b>
    </li>
    <li>
      <input
        name="companyTwitterUsername"
        className="field-long"
        placeholder="Company Twitter Username"
        handleKeyPress={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.socialUsername,
          warningMessage: "Invalid Twitter username"
        })}
        value={userInput.companyTwitterUsername}
        formNoValidate
      />
      <br/>
      <b>{errors.companyTwitterUsername && errors.companyTwitterUsername.message}</b>
    </li>
    <li>
      <input
        name="zipCode"
        placeholder="Zip Code"
        handleKeyPress={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.zipCode,
          warningMessage: "Invalid Zip Code"
        })}
        value={userInput.zipCode}
        formNoValidate
      />
      <br/>
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

ThirdPageFormInput.propTypes = {
  userInput: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  zipCodeObj: PropTypes.object.isRequired
}

export default ThirdPageFormInput;
