import { StyleSheet } from 'react-native';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const textStyles = StyleSheet.create({
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
