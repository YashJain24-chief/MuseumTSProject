import {View, Text} from 'react-native';
import {FC} from 'react';

type Props = {
  textToBeShown: string;
};

const Loader: FC<Props> = ({textToBeShown}) => {
  return (
    <View>
      <Text data-testID="textToBeShown">{textToBeShown}</Text>
    </View>
  );
};
export default Loader;
