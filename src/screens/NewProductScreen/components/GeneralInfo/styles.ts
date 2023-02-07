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
  textAreaContainer: {
    position: 'relative',
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
    padding: 10,
    fontSize: 18,
    fontWeight: '400',
    color: '#8592A0',
  },
  containerFormat: {
    position: 'absolute',
    top: 10,
    left: 0,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    borderBottomWidth: 1,
    borderBottomColor: '1 solid rgba(10, 37, 64, 0.32)',
  },
  inputContainerTwo: {
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '1 solid rgba(10, 37, 64, 0.32)',
    borderRadius: 5,
  },
  inputTwo: {
    height: 230,
    paddingTop: 1,
    padding: 10,
    fontSize: 18,
    fontWeight: '400',
    color: '#8592A0',
  },
});

export default styles;
