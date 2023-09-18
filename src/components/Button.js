import React from 'react';
// import { Pressable } from 'react-native-web';
import styled, { css } from 'styled-components/native';

const ButtonContainer = styled.Pressable`
  background-color: ${({ title, theme }) => {
    // console.log(title);
    return title === '버튼1' ? theme.blue : theme.purple;
  }};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Button = ({ title }) => {
  // console.log(title);
  return (
    <ButtonContainer title={title}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
