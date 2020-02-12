import styled from 'styled-components';
import Section from '../Section';

const CenteredSection = styled(Section)`
  text-align: center;
  height: ${props => props.height}px;
`;

export default CenteredSection;
