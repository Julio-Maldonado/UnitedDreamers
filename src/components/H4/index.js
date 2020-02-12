// /* eslint-disable jsx-a11y/heading-has-content */
// import React from 'react';

// function H4(props) {
//   return <h4 {...props.style, {asdf: 'asd'}}  />;
// }

// export default H4;

import styled from 'styled-components';

const H4 = styled.h4`
  color: ${props => props.color};

`;

export default H4;
