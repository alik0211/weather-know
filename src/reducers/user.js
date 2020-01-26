import { SET_LOCATION } from '../actions/user';

const initialState = {
  city: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      const location = action.payload;
      return {
        ...state,
        ...location,
      };

    default:
      return state;
  }
}
