import { putCategory, setCategories } from "../actions/categories";
import { ADD_CategoryField, DELETE_CategoryField, PUT_CategoryField } from "../actions/categoryFields";
import uuid from 'react-native-uuid';


const getCategory = (getState: any, categoryId: string) => {
  let category = getState().categories.allCategories.find((s: any) => s.id == categoryId);
  if (category)
    return { ...category }
  return null
}

const putCategoryFieldFlow = () => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {
  if (action.type === PUT_CategoryField) {
    var category = getCategory(getState, action.payload.categoryId)
    const newCategoryField = action.payload.field;
    const index = category.fields.findIndex((CategoryField: any) => CategoryField.id == newCategoryField.id);
    if (index > -1) {
      category.fields[index] = { ...category.fields[index], ...newCategoryField };
      dispatch(putCategory(category));
    }
  }

  next(action);
};

const addCategoryFieldFlow = ({ log }: { log: any }) => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {

  if (action.type === ADD_CategoryField) {
    var category = getCategory(getState, action.payload.categoryId)

    const id = uuid.v4()
    const newCategoryField = { ...action.payload.field, id: id, type: 'TEXT' };
    category.fields = [...category.fields, newCategoryField]
    dispatch(putCategory(category));
  }

  next(action);
};

const deleteCategoryFieldFlow = ({ log }: { log: any }) => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {

  if (action.type === DELETE_CategoryField) {
    var category = getCategory(getState, action.payload.categoryId)
    category.fields = category.fields.filter((s: any) => s.id != action.payload.fieldId)
    dispatch(putCategory(category));
  }

  next(action);
};


export default [addCategoryFieldFlow, putCategoryFieldFlow, deleteCategoryFieldFlow];
