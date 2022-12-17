import {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {MuseumStyles} from '../Styles/Museum';

type Props = {
  item: any; //try removing any if possible
  fetchDetails: any; //try removing any if possible
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
