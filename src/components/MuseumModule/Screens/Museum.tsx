import {FC} from 'react';
import {View, FlatList} from 'react-native';
import MuseumItem from '../UI/MuseumItem';
import Loader from '../UI/Loader';

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useMuseumData from '../custom-hooks/useMuseumData';

import {dispatchMuseumDataAction} from '../Actions/index';
import {dispatchMuseumSpecificDataAction} from '../Actions/index';

type Props = {
  navigation: any; //try removing any if possible
};

const Museum: FC<Props> = ({navigation}) => {
  const {museumData, museumSpecificData} = useMuseumData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchMuseumDataAction());
  }, []);

  useEffect(() => {
    if (
      !museumSpecificData.isLoading &&
      Object.keys(museumSpecificData.data).length > 0
    ) {
      navigation.navigate('MuseumDetails');
    }
  }, [museumSpecificData.isLoading, museumSpecificData.data]);

  async function fetchDetails(id: number) {
    dispatch(dispatchMuseumSpecificDataAction(id));
  }

  if (museumData.isLoading) {
    return <Loader textToBeShown="Loading..." />;
  }

  if (museumData.error) {
    return <Loader textToBeShown="Error Loading Data..." />;
  }

  return (
    <View>
      <FlatList
        data={museumData.museumData}
        renderItem={({item}) => (
          <MuseumItem item={item} fetchDetails={fetchDetails} />
        )}
        keyExtractor={(item: any, index: any) => index} //try removing any if possible
      />
    </View>
  );
};

export default Museum;
