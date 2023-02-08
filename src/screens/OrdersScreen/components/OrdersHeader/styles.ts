import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 17,
    color: '#103B66',
  },
  containerShip: {
    width: 146,
    height: 58,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#E7E9EC',
    borderRadius: 5,
  },
  shipText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#B6BEC6',
  },
});

export default styles;
