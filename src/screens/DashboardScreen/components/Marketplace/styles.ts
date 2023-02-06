import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 400,
    padding: 20,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  containerMarketplace: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  textMarketplace: {
    fontSize: 22,
    fontWeight: '600',
    color: '#103B66',
  },
  containerBody: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  textBody: {
    marginVertical: 20,
    fontSize: 15,
    fontWeight: '400',
    color: '#103B66',
  },
  containerDomain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 165,
    height: 165,
    borderRadius: 10,
    backgroundColor: '#FFA26B',
  },
  containerProduct: {
    width: 165,
    height: 165,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: '#00C48C',
  },
  textProduct1: {
    marginRight: 10,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  textProduct2: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  containerDiscover: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDiscover: {
    textDecorationLine: 'underline',
    fontSize: 17,
    fontWeight: '400',
    color: '#21B8F9',
  },
});

export default styles;
