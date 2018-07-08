// Actions
const FILTER_UPDATE = 'FILTER_UPDATE';
// Action Creators
export const updateFilter = value => ({ type: FILTER_UPDATE, value });

// Initial State
const initialState = '';

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_UPDATE:
      return action.value;

    default:
      return state;
  }
}
