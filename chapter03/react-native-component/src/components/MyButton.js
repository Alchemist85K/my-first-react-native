import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#3498db',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => props.onPress()}
    >
      <Text style={{ color: 'white', fontSize: 24 }}>
        {props.children || props.title}
      </Text>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  title: 'Button',
};

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default MyButton;
