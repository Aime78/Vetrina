import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E9EC',
    paddingBottom: 30,
  },
  containerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  containerStampa: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textOrder: {
    fontSize: 17,
    fontWeight: '400',
    color: '#103B66',
  },
  textStampa: {
    fontSize: 14,
    fontWeight: '400',
    color: '#21B8F9',
  },
});

export default styles;
