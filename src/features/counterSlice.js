import {isOpen} from '../types.js';
const initialState = {
  booleanValue: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case isOpen:
      return {
        ...state,
        booleanValue: action.payload
      };
    default:
      return state;
  }
};

export default reducer;