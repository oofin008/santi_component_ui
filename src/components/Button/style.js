import styled from 'styled-components';

export const ButtonBox = styled.button`
  width: ${props => (props.width ? props.width : 'inherit')};
  height: ${props => (props.height ? props.height : 'inherit')};
  border-radius: 37px;
  border-color: #ff7a18;
  color: white;
  font-size: inherit;
  background: #ff7a18;

  &:active,:focus {
    border-box: none;
    outline: none;
  }
`;
