"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export const ProviderRedux = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
