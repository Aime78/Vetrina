import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 610,
  },

  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E9EC',
  },
  columnOne: {
    flex: 0.7,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  columnTwo: {
    flex: 1,
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#E7E9EC',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  columnThree: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#E7E9EC',
    flexDirection: 'row',
    gap: 5,
  },
  columnFour: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#E7E9EC',
  },
  textHeader: {
    fontWeight: '600',
    fontSize: 17,
    color: '#233B53',
  },
  textBody: {
    fontWeight: '400',
    fontSize: 14,
    color: '#103B66',
  },
});

export default styles;
