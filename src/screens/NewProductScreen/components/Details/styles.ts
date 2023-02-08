import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 520,
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
    marginBottom: 30,
  },
  textBody: {
    fontSize: 15,
    fontWeight: '600',
    color: '#546679',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '1 solid rgba(10, 37, 64, 0.32)',
    borderRadius: 5,
  },
  input: {
    height: 40,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '400',
    color: '#8592A0',
  },
  containerCategory: {
    position: 'relative',
  },
  categoryArrow: {
    position: 'absolute',
    top: 45,
    right: 15,
  },
  containerWeight: {
    position: 'relative',
  },
  weightValue: {
    position: 'absolute',
    top: 40,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  containerAvailability: {
    position: 'relative',
  },
  availabilityValue: {
    position: 'absolute',
    top: 40,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  containerProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textFooter: {
    fontWeight: '400',
    fontSize: 16,
    color: '#103B66',
  },
  checkbox: {
    borderWidth: 1,
  },
});

export default styles;
