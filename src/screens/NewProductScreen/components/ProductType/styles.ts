import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 150,
    padding: 20,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: '600',
    color: '#103B66',
    marginTop: 20,
    marginBottom: 30,
  },
  containerBody: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  containerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textBody: {
    fontSize: 17,
    fontWeight: '400',
    color: '#103B66',
  },
});

export default styles;
