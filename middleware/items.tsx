import {
  ADD_Item,
  DELETE_Item,
  loadItemsSuccess,
  LOAD_Items,
  PUT_Item,
  setItems,
} from "../actions/items";
import { setLoading } from "../actions/ui";
import uuid from 'react-native-uuid';


const loadItemsFlow = ({ }) => ({ dispatch }: { dispatch: any }) => (next: any) => async (
  action: any
) => {
  next(action);

  if (action.type === LOAD_Items) {
    try {
      dispatch(setLoading(true));
      // load from storage
      dispatch(loadItemsSuccess([]));
      dispatch(setLoading(false));
    } catch (error) {
    }
  }
};

const putItemFlow = () => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {
  if (action.type === PUT_Item) {
    const oldItemsClone = getState().items.allItems.map((item: any) => ({
      ...item
    }));
    const newItem = action.payload;
    const index = oldItemsClone.findIndex((item: any) => item.id === newItem.id);
    oldItemsClone[index] = newItem;
    dispatch(setItems(oldItemsClone));
  }

  next(action);
};

const addItemFlow = ({ log }: { log: any }) => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {

  if (action.type === ADD_Item) {
    const oldItemsClone = getState().items.allItems.map((item: any) => ({
      ...item
    }));

    const newItem = { ...action.payload, id: uuid.v4(), categoryId: action.payload.categoryId };
    oldItemsClone.push(newItem)
    dispatch(setItems(oldItemsClone));
  }

  next(action);
};

const deleteItemFlow = ({ log }: { log: any }) => ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {

  if (action.type === DELETE_Item) {
    let oldItemsClone = getState().items.allItems.map((item: any) => ({
      ...item
    }));

    oldItemsClone = oldItemsClone.filter((s: any) => s.id != action.payload)
    dispatch(setItems(oldItemsClone));
  }

  next(action);
};


export default [loadItemsFlow, addItemFlow, putItemFlow, deleteItemFlow];
