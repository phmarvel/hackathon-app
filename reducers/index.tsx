import { combineReducers } from "@reduxjs/toolkit";
import { uiReducer as ui } from "./ui";
import { categoriesReducer as categories } from "./categories";
import { itemsReducer as items } from "./items";

export const reducers = combineReducers({
  ui,
  categories,
  items
});
