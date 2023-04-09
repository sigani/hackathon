import { Button, Grid, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useMainContext } from "../../store/MainContext";
import { signIn, signOut, useSession } from "next-auth/react";
import GlobalStore from "../../store/GlobalStore";

export default function LogInButton() {
  const { isLoggedIn } = useMainContext();
  const { data: session, status } = useSession();

  return (
    <>
      <div>
        <p>
          {!session && (
            <>
              <span>You are not signed in</span>
              <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                <LogInButton />
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                />
              )}
              <span>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </>
  );
}
