import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 100,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderBottomColor: 'rgba(10, 37, 64, 0.32)',
  },
  containerMenu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#103B66',
  },
  containerIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
});

export default styles;
