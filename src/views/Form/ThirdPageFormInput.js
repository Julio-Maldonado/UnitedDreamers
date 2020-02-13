import React from 'react';
import PropTypes from 'prop-types';

const ThirdPageFormInput = ({ userInput, handleChange, errors, register, zipCodeObj }) => (
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
      <form>
      <input
        name="zipCode"
        placeholder="Zip Code"
        onChange={handleChange}
        formNoValidate
        autoComplete={"off"}
        ref={register({
          required: 'Required',
          pattern: {
            value: /^\d{5}$|^\d{5}-\d{4}$/,
            message: "Invalid Zip Code"
          }
        })}
      />
      </form>
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
