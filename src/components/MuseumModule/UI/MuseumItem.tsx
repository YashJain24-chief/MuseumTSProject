import {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {MuseumStyles} from '../Styles/MuseumStyles';

type Props = {
  item: number;
  fetchDetails: (item: number) => void;
};

const MuseumItem: FC<Props> = ({item, fetchDetails}) => {
  return (
    <TouchableOpacity
      style={MuseumStyles.button}
      onPress={() => fetchDetails(item)}>
      <Text style={MuseumStyles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

export default MuseumItem;
