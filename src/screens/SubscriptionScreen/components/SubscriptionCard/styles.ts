import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 140,
    padding: 20,
    justifyContent: 'space-between',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerChange: {
    width: 118,
    height: 46,
    borderRadius: 5,
    backgroundColor: '#21B8F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFree: {
    fontWeight: '600',
    fontSize: 20,
    color: '#103B66',
  },
  textMax: {
    fontWeight: '600',
    fontSize: 15,
    color: '#103B66',
  },
  textCurrency: {
    fontWeight: '600',
    fontSize: 17,
    color: '#103B66',
  },
  textNumber: {
    fontWeight: '600',
    fontSize: 28,
    color: '#21B8F9',
  },
  textChange: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
  },
  textMessi: {
    fontWeight: '600',
    fontSize: 12,
    color: '#00C48C',
    marginTop: 10,
  },
});

export default styles;
