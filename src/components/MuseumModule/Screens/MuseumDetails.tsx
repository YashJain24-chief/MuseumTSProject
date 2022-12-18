import {FC} from 'react';
import {View, Text, Image} from 'react-native';
import useMuseumData from '../custom-hooks/useMuseumData';

import MuseumDetailStyles from '../Styles/MuseumDetailStyles';

const MuseumDetails: FC = () => {
  const {museumSpecificData} = useMuseumData();

  return (
    <View style={MuseumDetailStyles.container}>
      <Image
        source={{uri: museumSpecificData.data.primaryImageSmall}}
        style={MuseumDetailStyles.image}
      />
      <Text style={MuseumDetailStyles.title}>
        {museumSpecificData.data.title}
      </Text>
    </View>
  );
};

export default MuseumDetails;
