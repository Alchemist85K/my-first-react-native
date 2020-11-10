import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #54b7f9;
`;
const StyledText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;

export const Mail = () => {
  return (
    <Container>
      <StyledText>Mail</StyledText>
    </Container>
  );
};

export const Meet = () => {
  return (
    <Container>
      <StyledText>Meet</StyledText>
    </Container>
  );
};

export const Settings = () => {
  return (
    <Container>
      <StyledText>Settings</StyledText>
    </Container>
  );
};
