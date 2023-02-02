import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fistLine: {
    flex: 1,
    height: 0,
    borderWidth: 0.5,
    borderColor: '#6C7C8C',
  },
  secondLine: {
    flex: 1,
    height: 0,
    borderWidth: 0.5,
    borderColor: '#6C7C8C',
  },
  text: {
    marginRight: 20,
    marginLeft: 20,
    color: '#6C7C8C',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
