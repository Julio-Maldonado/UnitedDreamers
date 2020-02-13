import React from 'react';
import PropTypes from 'prop-types';

const FirstPageFormInput = ({ handleChange, errors, register }) => (
  <ul className="form-style-1">
    <li>
      {/* <form> */}
      <input
        name="firstName"
        className="field-divided"
        placeholder="First Name"
        onChange={handleChange}
        autoComplete={"off"}
        formNoValidate
        ref={register({
          required: 'Required',
          pattern: {
            value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            message: "Use a real first name"
          }
        })}
      />
      {/* </form> */}
      <br/><b>{errors.firstName && errors.firstName.message}</b>

    </li>
    <li>
      <input
        name="lastName"
        className="field-divided"
        placeholder="Last Name"
        onChange={handleChange}
        formNoValidate
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

FirstPageFormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired
}

export default FirstPageFormInput;
