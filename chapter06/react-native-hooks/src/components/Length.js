import React, { useState, useMemo } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledText = styled.Text`
  font-size: 24px;
`;

const getLength = text => {
  console.log(`Target Text: ${text}`);
  return text.length;
};

const list = ['JavaScript', 'Expo', 'Expo', 'React Native'];

let idx = 0;
const Length = () => {
  const [text, setText] = useState(list[0]);

  const _onPress = () => {
    ++idx;
    if (idx < list.length) setText(list[idx]);
  };
  const length = useMemo(() => getLength(text), [text]);

  return (
    <>
      <StyledText>Text: {text}</StyledText>
      <StyledText>Length: {length}</StyledText>
      <Button title="Get Length" onPress={_onPress} />
    </>
  );
};

export default Length;
