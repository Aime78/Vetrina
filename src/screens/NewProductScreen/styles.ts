import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f5f9',
  },
  textHeader: {
    marginVertical: 30,
    fontSize: 28,
    fontWeight: '600',
    color: '#103B66',
  },
  containerVariation: {
    flexDirection: 'row',
    gap: 20,
  },
  textContainerVariation: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainerInfo: {
    borderBottomWidth: 2,
    borderBottomColor: '#21B8F9',
  },
  textInfo: {
    color: '#21B8F9',
    fontSize: 13,
    fontWeight: '600',
  },
  textVariant: {
    color: '#3B5166',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default styles;
