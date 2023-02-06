import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    height: 'auto',
    paddingHorizontal: 20,
    paddingBottom: 60,
    backgroundColor: '#f1f5f9',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
  },
  containerConfigura: {
    position: 'absolute',
    top: -80,
    left: 20,
  },
  containerVisitors: {
    marginTop: 270,
  },
  containerOrders: {
    marginTop: 20,
  },
  containerLatest: {
    marginTop: 20,
  },
  containerMarketplace: {
    marginTop: 20,
  },
});

export default styles;
