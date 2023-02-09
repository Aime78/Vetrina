import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  containerVariation: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E7E9EC',
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
  containerShipping: {
    marginTop: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E7E9EC',
  },
  textShippingHeader: {
    fontSize: 17,
    fontWeight: '600',
    color: '#546679',
    marginBottom: 20,
  },
  textShippingBody: {
    fontSize: 16,
    fontWeight: '400',
    color: '#103B66',
  },
  containerTotal: {
    marginBottom: 20,
    paddingTop: 40,
  },
  containerPrice: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerCourier: {
    flexDirection: 'row',
    gap: 10,
  },
  textBodyTotal: {
    fontSize: 17,
    fontWeight: '400',
    color: '#103B66',
  },
  textBodyGrandTotal: {
    fontSize: 17,
    fontWeight: '600',
    color: '#103B66',
  },
  containerShipped: {
    width: '100%',
    height: 72,
    borderRadius: 5,
    backgroundColor: '#6979F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  containerShippedContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textShipped: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
  },
});

export default styles;
