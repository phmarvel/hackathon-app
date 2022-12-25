import {
  ADD_Category,
  DELETE_Category,
  loadCategoriesSuccess,
  LOAD_Categories,
  PUT_Category,
  setCategories,
} from "../actions/categories";
import { setLoading } from "../actions/ui";
import uuid from 'react-native-uuid';


const loadCategoriesFlow = ({ }) => ({ dispatch }: { dispatch: any }) => (next: any) => async (
  action: any
) => {
  next(action);

  if (action.type === LOAD_Categories) {
    try {
      dispatch(setLoading(true));
      // load from storage
      dispatch(loadCategoriesSuccess([]));
      dispatch(setLoading(false));
    } catch (error) {
    }
  }
};

const putCategoryFlow = () => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {
  if (action.type === PUT_Category) {
    const oldCategoriesClone = getState().categories.allCategories.map((category: any) => ({
      ...category
    }));
    const newCategory = action.payload;
    const index = oldCategoriesClone.findIndex((category: any) => category.id === newCategory.id);
    oldCategoriesClone[index] = newCategory;
    dispatch(setCategories(oldCategoriesClone));
  }

  next(action);
};

const addCategoryFlow = ({ log }: { log: any }) => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {

  if (action.type === ADD_Category) {
    const oldCategoriesClone = getState().categories.allCategories.map((category: any) => ({
      ...category
    }));

    const fieldId = uuid.v4();
    const newCategory = { ...action.payload, id: uuid.v4(), fields: [{ id: fieldId, type: 'TEXT' }], titleFieldId: fieldId };
    oldCategoriesClone.push(newCategory)
    dispatch(setCategories(oldCategoriesClone));
  }

  next(action);
};

const deleteCategoryFlow = ({ log }: { log: any }) => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {

  if (action.type === DELETE_Category) {
    let oldCategoriesClone = getState().categories.allCategories.map((category: any) => ({
      ...category
    }));

    oldCategoriesClone = oldCategoriesClone.filter((s: any) => s.id != action.payload)
    dispatch(setCategories(oldCategoriesClone));
  }

  next(action);
};


export default [loadCategoriesFlow, addCategoryFlow, putCategoryFlow, deleteCategoryFlow];
