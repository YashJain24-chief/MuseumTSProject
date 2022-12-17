import {useSelector} from 'react-redux';

export default function useMuseumData() {
  const museumData = useSelector((state: any) => state.museumData);
  const museumSpecificData = useSelector(
    (state: any) => state.museumDataSpecific,
  );
  return {museumData, museumSpecificData};
}
