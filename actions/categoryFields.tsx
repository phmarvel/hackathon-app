export const SET_CategoryFields = "[CategoryFields] set";
export const PUT_CategoryField = "[CategoryField] put";
export const ADD_CategoryField = "[CategoryField] add";
export const DELETE_CategoryField = "[CategoryField] delete";


export const setCategoryFields = (categoryId: string, fields: any) => ({
  type: SET_CategoryFields,
  payload: { categoryId, fields }
});

export const putCategoryField = (categoryId: string, field: any) => ({
  type: PUT_CategoryField,
  payload: { categoryId, field }
});



export const addCategoryField = (categoryId: string, field: any) => ({
  type: ADD_CategoryField,
  payload: { categoryId, field }
});


export const deleteCategoryField = (categoryId: string, fieldId: string) => ({
  type: DELETE_CategoryField,
  payload: { categoryId, fieldId }
});
