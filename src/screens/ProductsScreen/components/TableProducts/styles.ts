import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 370,
    height: 530,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E9EC',
  },
  columnOne: {
    flex: 0.6,
    padding: 10,
  },
  columnTwo: {
    flex: 0.25,
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#E7E9EC',
  },
  columnThree: {
    flex: 0.15,
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
  containerBody: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  columnBody: {
    justifyContent: 'center',
  },
  textBody: {
    fontWeight: '400',
    fontSize: 14,
    color: '#103B66',
  },
  containerFooter: {
    paddingLeft: 35,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  textFooter: {
    fontWeight: '600',
    fontSize: 10,
    color: '#6C7C8C',
  },
  containerP: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  containerChevron: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});

export default styles;
