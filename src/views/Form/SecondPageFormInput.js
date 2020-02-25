import React from 'react';
import PropTypes from 'prop-types';

import {
  BUSINESS_TYPES,
  CATEGORIES,
  REGEX_PATTERNS
} from './constants';

const SecondPageFormInput = ({ userInput, handleChange, errors, handleKeyPress }) => (
  <ul className="form-style-1">
    <br/>
    <b>{userInput.companyName}</b>
    <li>
      <p className="field-divided">Category</p>
      <select
        name="category"
        className="field-divided"
        onChange={(e) => handleChange({ evt: e })}
        value={userInput.category}
        autoFocus
      >
        {
          CATEGORIES.map((category, i) => {
            return (
              <option key={i} value={category}>{category}</option>
            );
          })
        }
      </select>
      <br/>
      <br/>
      <p className="field-divided">Business Type</p>
      <select
        name="companyType"
        className="field-divided"
        onChange={(e) => handleChange({ evt: e })}
        value={userInput.companyType}
      >
        {
          BUSINESS_TYPES.map((businessType, i) => {
            return (
              <option key={i} value={businessType}>{businessType}</option>
            );
          })
        }
      </select>
    </li>
    <li>
      <textarea
        name="description"
        className="field-long field-textarea"
        placeholder="Brief Company Description"
        onChange={(e) => handleChange({ evt: e })}
        value={userInput.description}
        formNoValidate
      />
      <br/>
      <b>{errors.description && errors.description.message}</b>
    </li>
    <li>
      <input
        name="services"
        className="field-long"
        onKeyDown={handleKeyPress}
        placeholder="Your Company's Services (i.e. haircuts, real estate, software development, construction)"
        onChange={(e) => handleChange({ evt: e })}
        value={userInput.services}
        formNoValidate
      />
      <br/>
      <b>{errors.services && errors.services.message}</b>
    </li>
    <li>
      <input
        name="companyURL"
        className="field-long"
        placeholder="Company Website (www.companywebsite.com)"
        onKeyDown={handleKeyPress}
        onChange={(e) => handleChange({
          evt: e,
          regex: REGEX_PATTERNS.website,
          warningMessage: "Invalid URL"
        })}
        value={userInput.companyURL}
        formNoValidate
      />
      <br/>
      <b>{errors.companyURL && errors.companyURL.message}</b>
    </li>
  </ul>
)

SecondPageFormInput.propTypes = {
  errors: PropTypes.object.isRequired,
  userInput: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired
}

export default SecondPageFormInput;
