const initialmuseumState = {isLoading: false, museumData: [], error: false};

export default function museumReducer(
  state: typeof initialmuseumState = initialmuseumState,
  action: any,
) {
  switch (action.type) {
    case 'Loading':
      return {...state, isLoading: true};
    case 'Data':
      return {...state, isLoading: false, museumData: action.payload};
    case 'Error':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
