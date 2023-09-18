import React, { useState } from 'react';
import { Switch } from 'react-native';
import styled, { css, ThemeProvider } from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import { lightTheme, darkTheme } from './theme';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch} />
        <Button title="버튼1" />
        <Button title="버튼2" />
        <Input borderColor="#3498db" placeholderTextColor="#3498db" />
        <Input borderColor="blue" placeholderTextColor="blue" />
      </Container>
    </ThemeProvider>
  );
};

export default App;
