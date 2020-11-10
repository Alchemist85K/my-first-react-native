import React from 'react';
import styled from 'styled-components/native';
import { useFetch } from '../hooks/useFetch';

const StyledImage = styled.Image`
  background-color: #7f8c8d;
  width: 300px;
  height: 300px;
`;
const ErrorMessage = styled.Text`
  font-size: 18px;
  color: #e74c3c;
`;
const LoadingMessage = styled.Text`
  font-size: 18px;
  color: #2ecc71;
`;

const URL = 'https://dog.ceo/api/breeds/image/random';
const Dog = () => {
  const { data, error, inProgress } = useFetch(URL);

  return (
    <>
      {inProgress && (
        <LoadingMessage>The API request is in progress</LoadingMessage>
      )}
      <StyledImage source={data?.message ? { uri: data.message } : null} />
      <ErrorMessage>{error?.message}</ErrorMessage>
    </>
  );
};

export default Dog;
