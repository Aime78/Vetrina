import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f1f5f9',
  },
  containerSubscription: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 30,
  },
  containerMonthly: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  containerYearly: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  containerPromo: {
    width: 55,
    height: 24,
    backgroundColor: '#00C48C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  containerCard: {
    marginTop: 60,
    marginBottom: 40,
  },
  textPromo: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  textYearly: {
    fontSize: 17,
    fontWeight: '600',
    color: '#103B66',
  },
  textMonthly: {
    fontSize: 17,
    fontWeight: '600',
    color: '#7D8A99',
  },
  textHeader: {
    fontSize: 22,
    fontWeight: '600',
    color: '#103B66',
    textAlign: 'center',
  },
});

export default styles;
