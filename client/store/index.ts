import { reducer } from './reducers/index';
import { createWrapper } from "next-redux-wrapper";
import {  RootState } from "./reducers";
import { configureStore, Store } from "@reduxjs/toolkit";

// create a makeStore function
const store = configureStore({ reducer: reducer });

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(store, { debug: true });

