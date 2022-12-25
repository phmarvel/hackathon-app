import * as uiActions from "../actions/ui";

const initialState = {
  loading: true
};

export const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case uiActions.SET_LOADING_OFF:
    case uiActions.SET_LOADING_ON:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
