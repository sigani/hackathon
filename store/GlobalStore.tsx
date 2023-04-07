import * as React from "react";
import VolunteerStore from "./VolunteerContext";

const GlobalStore = ({ children }: any) => {
  return <VolunteerStore>{children}</VolunteerStore>;
};

export default GlobalStore;
