import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 260,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 180,
    padding: 20,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  containerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerEye: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  textEye: {
    fontSize: 22,
    fontWeight: '600',
    color: '#103B66',
  },
  containerMonth: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textMonth: {
    fontSize: 13,
    fontWeight: '400',
    color: '#6C7C8C',
  },
  containerZero: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textZero: {
    fontSize: 42,
    fontWeight: '600',
    color: '#103B66',
  },
  containerBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  textBody: {
    textDecorationLine: 'underline',
    fontSize: 17,
    fontWeight: '400',
    color: '#21B8F9',
  },
});

export default styles;
