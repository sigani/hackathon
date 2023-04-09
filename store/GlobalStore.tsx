import * as React from "react";
import MainStore from "./MainContext";

const GlobalStore = ({ children }: any) => {
  return <MainStore>{children}</MainStore>;
};

export default GlobalStore;
