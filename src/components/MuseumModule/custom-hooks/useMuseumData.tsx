import {useSelector} from 'react-redux';
import Reducer from '../Types/Reducer';

type State = {
  museumData: Reducer;
  museumDataSpecific: Reducer;
};

export default function useMuseumData() {
  const museumData = useSelector((state: State) => state.museumData);
  const museumSpecificData = useSelector(
    (state: State) => state.museumDataSpecific,
  );
  return {museumData, museumSpecificData};
}
