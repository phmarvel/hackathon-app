export const LOAD_Categories = "[Categories] load";
export const LOAD_Categories_SUCCESS = "[Categories] load success";
export const LOAD_Categories_FAILURE = "[Categories] load failure";
export const SET_Categories = "[Categories] set";
export const PUT_Category = "[Categories] put";
export const ADD_Category = "[Categories] add";
export const DELETE_Category = "[Categories] delete";

export const loadCategories = {
  type: LOAD_Categories
};

export const loadCategoriesSuccess = (categories: any) => ({
  type: LOAD_Categories_SUCCESS,
  payload: categories
});

export const loadCategoriesFailure = (error: any) => ({
  type: LOAD_Categories_FAILURE,
  payload: error
});

export const setCategories = (categories: any) => ({
  type: SET_Categories,
  payload: categories
});

export const putCategory = (category: any) => ({
  type: PUT_Category,
  payload: category
});



export const addCategory = (category: any) => ({
  type: ADD_Category,
  payload: category
});


export const deleteCategory = (id: any) => ({
  type: DELETE_Category,
  payload: id
});
