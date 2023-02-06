import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 240,
    padding: 20,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  containerHeader: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: '600',
    color: '#103B66',
  },
  containerBody: {
    marginVertical: 20,
  },
  textBody: {
    fontSize: 18,
    fontWeight: '400',
    color: '#103B66',
    lineHeight: 24,
  },
  textReceive: {
    fontWeight: '700',
    color: '#00C48C',
  },
  containerStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStart: {
    textDecorationLine: 'underline',
    fontSize: 17,
    fontWeight: '400',
    color: '#21B8F9',
  },
});

export default styles;
