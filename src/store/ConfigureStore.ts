import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const ConfigureStore = configureStore({
  reducer: {
  },
  devTools: true,
});

export type RootState = ReturnType<typeof ConfigureStore.getState>;
export type AppDispatch = typeof ConfigureStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default ConfigureStore;
