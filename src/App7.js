import React from 'react';
import { View, Text } from 'react-native';
import styled, { css } from 'styled-components/native';

const sizeText = css`
  color: #f00;
`;
const MyText = styled.Text`
  ${sizeText}
  font-size: 20px;
`;
const MyText2 = styled.Text`
  ${sizeText}
  font-size: 50px;
`;
const MyText3 = styled.Text`
  background-color: yellow;
  color: black;
  font-size: 50px;
`;
const MyText4 = styled.Text.attrs(props => ({
  numberOfLines: props.children.length > 10 ? 3 : 2,
}))`
  /* ${props => console.log(props.children)} */
  background-color: ${props => (props.children.length > 10 ? 'red' : 'yellow')};
  color: black;
  font-size: 50px;
`;

const App = () => {
  const _onPress = () => alert('hi');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red', fontSize: 20 }}>반갑습니다.</Text>
      <MyText>홍길동</MyText>
      <MyText2>홍길순</MyText2>
      <MyText3 numberOfLines={2}>
        홍길남ㄹㅇㄴㅁㄹㅇㄴㅁㄹㅇㄴㅁㄹㅇㄴㅁㄹㅇㄴㅁㄹㅇㄴㅁ
      </MyText3>
      <MyText4>fdsjakfldjsaklfdjskafldjskalf;djasl;jfkdsalfjaks;lf</MyText4>
    </View>
  );
};
export default App;
