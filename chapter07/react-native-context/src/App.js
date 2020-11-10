import React from 'react';
import styled from 'styled-components/native';
import User from './components/User';
import UserContext, { UserProvider } from './contexts/User';
import Input from './components/Input';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <UserProvider>
      <Container>
        <User />
        <Input />
      </Container>
    </UserProvider>
  );
};

/*
// 7.2.2. Provider
const App = () => {
  return (
    <UserContext.Provider value={{ name: 'Beomjun' }}>
      <Container>
        <User />
      </Container>
    </UserContext.Provider>
  );
};
*/

export default App;
