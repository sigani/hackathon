import { createContext, useContext } from "react";

const VolunteerContext = createContext<VolunteerStoreValues | undefined>(
  undefined
);

interface VolunteerStoreValues {}

export const useVolunteerContext = () => {
  const volunteerContext = useContext(VolunteerContext);
  if (volunteerContext === undefined) {
    throw new Error("useVolunteerContext must be called inside a GlobalStore");
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
