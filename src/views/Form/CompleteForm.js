import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import H4 from '../../components/H4';

import { SOCIAL_DATA } from './constants';

const CompleteForm = ({ zipCodeObj, userInput }) => (
  <div>
    <p>Thanks for submitting {userInput.companyName}, {userInput.firstName}! We're making a platform for DACA owned businesses and will reach out for more info if needed.</p>
    <br/>
    <p>Join our United Dreamers Facebook page as we grow our community!</p>
    <button style={{"color": "#3b5998"}} onClick={() => {window.open('https://www.facebook.com/groups/2524403604498738/about/')}}>
      Go to Facebook Community
    </button>
    {/* <ul className="icons">
      {SOCIAL_DATA.map(s => (
        <li key={s.label}>
          <a href={s.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={s.icon} color={s.color} />
          </a>
        </li>
      ))}
    </ul> */}
  </div>
)

CompleteForm.propTypes = {
  zipCodeObj: PropTypes.object.isRequired,
  userInput: PropTypes.object.isRequired
}

export default CompleteForm;
