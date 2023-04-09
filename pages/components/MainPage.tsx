import { SessionProvider } from "next-auth/react";
import ProfilePage from "./userpages/ProfilePage";

function MainPage() {
  return (
    <SessionProvider>
      <ProfilePage />
    </SessionProvider>
  );
}
export default MainPage;
