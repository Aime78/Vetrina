import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 200,
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
    justifyContent: 'space-between',
  },
  containerOrders: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  textOrders: {
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
  textMiddle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#7D8A99',
  },
  containerMiddle: {
    marginVertical: 20,
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
