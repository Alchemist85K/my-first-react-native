import React, { useContext } from 'react';
import styled from 'styled-components/native';
import UserContext, { UserConsumer } from '../contexts/User';

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const User = () => {
  const { user } = useContext(UserContext);
  return <StyledText>Name: {user.name}</StyledText>;
};

/*
// 7.2.3. Context 수정하기
const User = () => {
  return (
    <UserConsumer>
      {({ user }) => <StyledText>Name: {user.name}</StyledText>}
    </UserConsumer>
  );
};
*/

/*
// 7.2.1. Consumer
const User = () => {
  return (
    <UserContext.Provider value={{ name: 'React Native' }}>
      <UserContext.Consumer>
        {value => <StyledText>Name: {value.name}</StyledText>}
      </UserContext.Consumer>
    </UserContext.Provider>
  );
};
*/

export default User;
