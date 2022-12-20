import Reducer from '../Types/Reducer';
import Action from '../Types/Action';
import {MuseumActions} from '../constants/ActionConstants';
const initialmuseumState: Reducer = {isLoading: false, data: [], error: false};

export default function museumReducer(
  state: typeof initialmuseumState = initialmuseumState,
  action: Action,
) {
  switch (action.type) {
    case MuseumActions.LOADING:
      return {...state, isLoading: true};
    case MuseumActions.Data:
      return {...state, isLoading: false, data: action.payload};
    case MuseumActions.Error:
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
