// /* eslint-disable jsx-a11y/heading-has-content */
// import React from 'react';

// function H3(props) {
//   return <h3 {...props.style, {asdf: 'asd'}}  />;
// }

// export default H3;

import styled from 'styled-components';

const H3 = styled.h3`
  color: ${props => props.color};
  margin-left: 10vw;
  margin-right: 10vw;
`;

export default H3;
