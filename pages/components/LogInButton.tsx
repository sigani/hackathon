import { Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import APIManager from "../../utils/APIManager";
import { User } from "../../interfaces/User";

export default function LogInButton() {
  const { data: session, status } = useSession() ?? {};

  useEffect(() => {
    if (status === "authenticated") {
      APIManager.getInstance().then((instance) => {
        instance.getUsers().then((res) => {
          if (session.user && session.user.email) {
            for (let i of res) {
              if (i.email === session.user.email) {
                return;
              }
            }
          }

          APIManager.getInstance().then((inst) => {
            let newUser: User = {
              username: session.user?.name as string,
              email: session.user?.email as string,
              languages: [],
              description: "",
              projects: [],
              requests: [],
              badges: 1,
              socials: { github: "", discord: "", linkedin: "" },
            };
            inst.insertUser(newUser).then((res) => {
              console.log(res);
            });
          });
        });
      });
    }
  }, [session]);

  return (
    <>
      <div>
        {!session && (
          <>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <Button
                variant="contained"
                sx={{
                  zIndex: "1000",
                  width: "240px",
                  position: "fixed",
                  bottom: "40px",
                  alignContent: "center",
                  borderRadius: "20px",
                  bgcolor: "rgba(0,0,0,0.68)",
                  left: "50%",
                  marginLeft: "-125px",
                  ":hover": {
                    bgcolor: "rgba(37,37,37,0.37)",
                    color: "white",
                  },
                }}
              >
                <LoginIcon />
                <Typography variant={"body2"} paddingLeft={"20px"}>
                  Log in to continue
                </Typography>
              </Button>
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
            {/*<Grid*/}
            {/*  sx={{*/}
            {/*    position: "fixed",*/}
            {/*    bottom: "10px",*/}
            {/*    zIndex: "1000",*/}
            {/*    left: "50px",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <span>*/}
            {/*    <small>Signed in as</small>*/}
            {/*    <br />*/}
            {/*    <strong>{session.user.email ?? session.user.name}</strong>*/}
            {/*  </span>{" "}*/}
            {/*  <br />*/}
            {/*  <a*/}
            {/*    href={`/api/auth/signout`}*/}
            {/*    onClick={(e) => {*/}
            {/*      e.preventDefault();*/}
            {/*      signOut();*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    Sign out*/}
            {/*  </a>*/}
            {/*</Grid>*/}
          </>
        )}
      </div>
    </>
  );
}
