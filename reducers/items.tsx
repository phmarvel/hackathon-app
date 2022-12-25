import { LOAD_Items_SUCCESS, SET_Items } from "../actions/items";

const initialState = {
  allItems: [],
  error: null
};

export const itemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_Items_SUCCESS:
      return { allItems: action.payload, error: null };
    case SET_Items:
      return { allItems: action.payload, error: null };
    default:
      return state;
  }
};
