import React from 'react';
import PropTypes from 'prop-types';

const SecondPageFormInput = ({ userInput, handleChange, errors, register }) => (
  <ul className="form-style-1">
    <br />
    <b>{userInput.companyName}</b>
    <li>
      <p className="field-divided">Category</p>
      <select
        id="select"
        name="category"
        className="field-divided"
        defaultValue="Technology"
        onChange={handleChange}
      >
        <option value="Construction">Construction</option>
        <option value="Cosmetics">Cosmetics</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Food and Drinks">Food and Drinks</option>
        <option value="Health Care">Health Care</option>
        <option value="Marketing">Marketing</option>
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
        ref={register({ required: 'Required' })}
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
        ref={register({ required: 'Required' })}
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
        ref={register({
          pattern: {
            value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
            message: "Invalid URL"
          }
        })}
      />
      {/* <LongInput
        name={companyURL}
        placeholder={""}
        onChange={handleChange}
        register={register}
        value={/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/}
        message={"Invalid URL"}
        // required={true} //default to false
      /> */}

      <br/><b>{errors.companyURL && errors.companyURL.message}</b>
    </li>
  </ul>
)

SecondPageFormInput.propTypes = {
  userInput: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired
}

export default SecondPageFormInput;
