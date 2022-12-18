import {StyleSheet} from 'react-native';

const MuseumDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    backgroundColor: 'grey',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    width: '100%',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
});

export default MuseumDetailStyles;
