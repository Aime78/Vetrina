import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 460,
    padding: 20,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  containerOriginalPrice: {
    position: 'relative',
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
    paddingLeft: 38,
    fontSize: 18,
    fontWeight: '400',
    color: '#8592A0',
  },
  inputContainerTwo: {
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: '#E7E9EC',
  },
  inputTwo: {
    height: 40,
    paddingLeft: 40,
    padding: 10,
    fontSize: 14,
  },
  containerOriginal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    top: 22,
    left: 10,
  },
  textOriginal: {
    fontWeight: '400',
    fontSize: 14,
    color: '#103B66',
  },
  containerDiscountedPrice: {
    position: 'relative',
  },
  containerDiscounted: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 10,
  },
  containerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textFooter: {
    fontWeight: '400',
    fontSize: 14,
    color: '#103B66',
  },
  checkbox: {
    borderWidth: 1,
  },
});

export default styles;
