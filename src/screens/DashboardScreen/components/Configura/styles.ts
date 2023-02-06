import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 317,
    paddingVertical: 20,
    display: 'flex',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  containerConfig: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textConfig: {
    fontWeight: '600',
    fontSize: 22,
    color: '#103B66',
  },
  containerText: {
    marginVertical: 20,
    display: 'flex',
    alignItems: 'center',
  },
  textCompletato: {
    fontSize: 24,
    fontWeight: '600',
    color: '#F33451',
  },
  textBody: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: '#7D8A99',
  },
  containerCompleta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 20,
  },
  textCompleta: {
    textDecorationLine: 'underline',
    fontSize: 17,
    fontWeight: '400',
    color: '#21B8F9',
  },
});

export default styles;
