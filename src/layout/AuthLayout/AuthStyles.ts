import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 80,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 155.1,
    height: 22.88,
  },
  textContainer: {
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    color: '#103B66',
    fontSize: 28,
    fontWeight: '500',
  },
  description: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    color: '#546679',
  },
});

export default styles;
