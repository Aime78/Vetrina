import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 550,
    padding: 20,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  containerHeader: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  textHeader: {
    fontWeight: '600',
    fontSize: 22,
    color: '#103B66',
  },
  card: {
    backgroundColor: 'white',
    marginVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardContainer: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#21B8F9',
  },
  cardBody: {
    marginVertical: 5,
    fontSize: 15,
    fontWeight: '600',
    color: '#103B66',
  },
  cardSpan: {
    fontSize: 12,
    fontWeight: '300',
    color: '#7D8A99',
    textDecorationLine: 'underline',
  },
  blogContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  blogText: {
    textDecorationLine: 'underline',
    fontSize: 17,
    fontWeight: '400',
    color: '#21B8F9',
  },
});

export default styles;
