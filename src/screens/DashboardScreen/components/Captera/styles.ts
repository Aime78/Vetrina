import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#103B66',
    borderRadius: 10,
    width: 370,
    height: 420,
    padding: 20,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  containerBody: {
    marginVertical: 20,
  },
  textBody: {
    fontWeight: '400',
    fontSize: 18,
    color: '#FFFFFF',
  },
  textPositive: {
    color: '#00C48C',
    fontWeight: '600',
  },
  textAdditional: {
    fontWeight: '600',
  },
  containerReview: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  textReview: {
    fontSize: 17,
    fontWeight: '400',
    color: '#00C48C',
    textDecorationLine: 'underline',
  },
  borderReview: {
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingBottom: 20,
  },
  containerPromotion: {
    marginTop: 20,
  },
  containerTrust: {
    marginTop: 20,
  },
});

export default styles;
