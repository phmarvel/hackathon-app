import { LOAD_Categories_SUCCESS, SET_Categories } from "../actions/categories";

const initialState = {
  allCategories: [],
  error: null
};

export const categoriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_Categories_SUCCESS:
      return { allCategories: action.payload, error: null };
    case SET_Categories:
      return { allCategories: action.payload, error: null };
    default:
      return state;
  }
};
