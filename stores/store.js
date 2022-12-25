import { createStore, compose, applyMiddleware,configureStore as configure } from "@reduxjs/toolkit";
import middleware from "../middleware";
import { reducers } from "../reducers/index";
import logger from 'redux-logger'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const configureStore = (services,preloadedState) =>{


  let store = configure({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),...middleware.map((f) => f(services)) ,logger ],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  })



  store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()))
    AsyncStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

  return store;
};
