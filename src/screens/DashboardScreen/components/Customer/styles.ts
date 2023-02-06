import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 210,
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  textBody: {
    fontSize: 20,
    fontWeight: '400',
    color: '#103B66',
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#21B8F9',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default styles;
