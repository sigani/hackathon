import { signIn, signOut, useSession } from "next-auth/react";
import LogInButton from "./components/LogInButton";
import GlobalStore from "../store/GlobalStore";
export default function HeadComponent() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <GlobalStore>
      <header>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
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
        <nav></nav>
      </header>
    </GlobalStore>
  );
}
