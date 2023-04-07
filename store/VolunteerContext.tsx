import { createContext, useContext } from "react";

const VolunteerContext = createContext<VolunteerStoreValues | undefined>(
  undefined
);

interface VolunteerStoreValues {}

export const useAPIContext = () => {
  const volunteerContext = useContext(VolunteerContext);
  if (volunteerContext === undefined) {
    throw new Error("useAPIContext must be called inside a GlobalStore");
  }
  return volunteerContext;
};

const VolunteerStore = ({ children }: any) => {
  const VolunteerStoreValues: VolunteerStoreValues = {};

  return (
    <VolunteerContext.Provider value={VolunteerStoreValues}>
      {children}
    </VolunteerContext.Provider>
  );
};

export default VolunteerStore;
