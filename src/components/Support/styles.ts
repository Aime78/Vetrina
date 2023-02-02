import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    width: 'auto',
    borderWidth: 0.5,
    borderColor: '#00C48C',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: '#103B66',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default styles;
