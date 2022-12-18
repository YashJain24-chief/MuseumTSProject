import Reducer from '../Types/Reducer';
import Action from '../Types/Action';
const initialmuseumState: Reducer = {isLoading: false, data: [], error: false};

export default function museumReducer(
  state: typeof initialmuseumState = initialmuseumState,
  action: Action,
) {
  switch (action.type) {
    case 'Loading':
      return {...state, isLoading: true};
    case 'Data':
      return {...state, isLoading: false, data: action.payload};
    case 'Error':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
