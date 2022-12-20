import Reducer from '../Types/Reducer';
import Action from '../Types/Action';
import {MuseumActions} from '../constants/ActionConstants';
const initialmuseumSpecificState: Reducer = {
  isLoading: false,
  data: {},
  error: false,
};

export default function museumReducerSpecific(
  state: typeof initialmuseumSpecificState = initialmuseumSpecificState,
  action: Action,
) {
  switch (action.type) {
    case MuseumActions.LoadingSpecific:
      return {...state, isLoading: true};
    case MuseumActions.DataSpecific:
      return {...state, isLoading: false, data: action.payload};
    case MuseumActions.ErrorSpecific:
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
