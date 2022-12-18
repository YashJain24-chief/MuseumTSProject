import {FC} from 'react';
import {View, FlatList} from 'react-native';
import MuseumItem from '../UI/MuseumItem';
import Loader from '../UI/Loader';

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useMuseumData from '../custom-hooks/useMuseumData';

import {dispatchMuseumDataAction} from '../Actions/index';
import {dispatchMuseumSpecificDataAction} from '../Actions/index';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProps = {
  Museum: undefined;
  MuseumDetails: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<NavigationProps>;
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

  function fetchDetails(id: number) {
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
        data={museumData.data}
        renderItem={({item}) => (
          <MuseumItem item={item} fetchDetails={fetchDetails} />
        )}
        keyExtractor={(item: number, index: number) => String(index)}
      />
    </View>
  );
};

export default Museum;
