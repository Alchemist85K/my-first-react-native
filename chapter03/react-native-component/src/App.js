import React from 'react';
import { View } from 'react-native';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

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
      <EventButton />
      <EventInput />
    </View>
  );
};

export default App;

/*
// 3.3.2. state
import React from 'react';
import { View } from 'react-native';
import Counter from './components/Counter';

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
      <Counter />
    </View>
  );
};

export default App;
*/

/*
// 3.3.1. props
import React from 'react';
import { Text, View } from 'react-native';
import MyButton from './components/MyButton';

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
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
      <MyButton title="Button" onPress={() => alert('props')} />
      <MyButton title="Button" onPress={() => alert('children')}>
        Children Props
      </MyButton>
      <MyButton onPress={() => alert('default')} />
    </View>
  );
};

export default App;
*/

/*
// 3.2.2. 나만의 컴포넌트 만들기
import React from 'react';
import { Text, View } from 'react-native';
import MyButton from './components/MyButton';

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
          fontSize: 30,
          marginBottom: 10,
        }}
      >
        My Button Component
      </Text>
      <MyButton />
    </View>
  );
};

export default App;
*/

/*
// 3.2.1. 핵심 컴포넌트
import React from 'react';
import { Text, View, Button } from 'react-native';

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
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Button Component</Text>
      <Button title="Button" onPress={() => alert('Click !!!')} />
    </View>
  );
};

export default App;
*/
