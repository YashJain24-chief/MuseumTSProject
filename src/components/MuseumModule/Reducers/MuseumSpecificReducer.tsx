import Reducer from '../Types/Reducer';
import Action from '../Types/Action';
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
    case 'LoadingSpecific':
      return {...state, isLoading: true};
    case 'DataSpecific':
      return {...state, isLoading: false, data: action.payload};
    case 'ErrorSpecific':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
