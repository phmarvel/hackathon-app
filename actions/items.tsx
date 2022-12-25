export const LOAD_Items = "[Items] load";
export const LOAD_Items_SUCCESS = "[Items] load success";
export const LOAD_Items_FAILURE = "[Items] load failure";
export const SET_Items = "[Items] set";
export const PUT_Item = "[Items] put";
export const ADD_Item = "[Items] add";
export const DELETE_Item = "[Items] delete";


export const loadItems = {
  type: LOAD_Items
};

export const loadItemsSuccess = (items: any) => ({
  type: LOAD_Items_SUCCESS,
  payload: items
});

export const loadItemsFailure = (error: any) => ({
  type: LOAD_Items_FAILURE,
  payload: error
});

export const setItems = (items: any) => ({
  type: SET_Items,
  payload: items
});

export const putItem = (item: any) => ({
  type: PUT_Item,
  payload: item
});



export const addItem = (categoryId: any, item: any) => ({
  type: ADD_Item,
  payload: { ...item, categoryId }
});


export const deleteItem = (id: any) => ({
  type: DELETE_Item,
  payload: id
});
