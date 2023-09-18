import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs(props => ({
  placeholder: 'Enter a text...',
}))`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.borderColor};
  font-size: 16px;
`;

const Input = props => {
  return (
    <StyledInput
      borderColor={props.borderColor}
      placeholderTextColor={props.placeholderTextColor}
    />
  );
};

export default Input;
