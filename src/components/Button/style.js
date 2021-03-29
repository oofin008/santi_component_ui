import styled from 'styled-components';

export const ButtonBox = styled.button`
  width: ${props => (props.width ? props.width : 'inherit')};
  height: ${props => (props.height ? props.height : 'inherit')};
  border-radius: 37px;
  border-color: red;
  color: black;
  font-size: inherit;
  background: white;

  &:active,:focus {
    border-box: none;
    outline: none;
  }
`;
