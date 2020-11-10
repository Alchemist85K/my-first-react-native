import React, { useState } from 'react';
import { Switch } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import { lightTheme, darkTheme } from './theme';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
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
        <Button title="Hanbit" />
        <Button title="React Native" />
        <Input borderColor="#3498db" />
        <Input borderColor="#9b59b6" />
      </Container>
    </ThemeProvider>
  );
};

export default App;

/*
// 4.2.3. 그림자
import React from 'react';
import { View } from 'react-native';
import { viewStyles } from './styles';
import ShadowBox from './components/ShadowBox';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <ShadowBox />
    </View>
  );
};

export default App;
*/

/*
// 4.2.1. flex와 범위
import React from 'react';
import { View } from 'react-native';
import { viewStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

export default App;
*/

/*
// 4.1.4. 외부 스타일 이용하기
import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <Text style={[textStyles.text, { color: 'green' }]}>
        Inline Styling - Text
      </Text>
      <Text style={[textStyles.text, textStyles.error]}>
        Inline Styling - Error
      </Text>
    </View>
  );
};

export default App;
*/

/*
// 4.1.3 여러 개의 스타일 적용
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: 'green' }]}>
        Inline Styling - Text
      </Text>
      <Text style={[styles.text, styles.error]}>Inline Styling - Error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  error: {
    fontWeight: '400',
    color: 'red',
  },
});

export default App;
*/

/*
// 4.1.1. 인라인 스타일링
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: '600',
          color: 'black',
        }}
      >
        Inline Styling - Text
      </Text>
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: '400',
          color: 'red',
        }}
      >
        Inline Styling - Error
      </Text>
    </View>
  );
};

export default App;
*/
