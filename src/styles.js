import { StyleSheet } from 'react-native';

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const textStyles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  error: {
    // padding: 10,
    // fontSize: 26,
    fontWeight: '400',
    color: 'red',
  },
});

export { viewStyles, textStyles };
