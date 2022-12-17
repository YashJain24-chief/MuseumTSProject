import {View, Text} from 'react-native';

export default function Loader({textToBeShown}: any) {
  return (
    <View>
      <Text data-testID="textToBeShown">{textToBeShown}</Text>
    </View>
  );
}
