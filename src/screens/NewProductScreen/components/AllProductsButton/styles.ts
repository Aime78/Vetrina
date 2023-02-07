import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 147,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#21B8F9',
    borderRadius: 105,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#103B66',
  },
});

export default styles;
