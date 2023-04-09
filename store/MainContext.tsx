import { createContext, useContext, useState } from "react";
import * as React from "react";

const MainContext = createContext<MainStoreValues | undefined>(undefined);

interface MainStoreValues {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useMainContext = () => {
  const mainContext = useContext(MainContext);
  if (mainContext === undefined) {
    throw new Error("useMainContext must be called inside a GlobalStore");
  }
  return mainContext;
};

const MainStore = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const MainStoreValues: MainStoreValues = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
  };

  return (
    <MainContext.Provider value={MainStoreValues}>
      {children}
    </MainContext.Provider>
  );
};

export default MainStore;
