import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 240,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  introduction: {
    fontWeight: '600',
    fontSize: 34,
    color: '#FFFFFF',
  },
  bodyContainer: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  body: {
    fontWeight: '400',
    fontSize: 17,
    color: '#FFFFFF',
  },
});

export default styles;
