import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toggleFormAction, toggleUpdate } from "./slices/createSlices";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: toggleFormAction,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(toggleUpdate(action.payload));
  },
});

export default listenerMiddleware;
