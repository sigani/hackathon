import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TopBar from "../TopBar";
import LeftMenuProfile from "./LeftMenuProfile";
import MiddleContent from "./MiddleContent";
import GlobalStore from "../../../store/GlobalStore";
import LogInButton from "../LogInButton";
import * as React from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import APIManager from "../../../utils/APIManager";

function Profile() {
  const { data: session, status } = useSession() ?? {};
  const [username, setUsername] = useState("");
  const [projects, setProjects] = useState([]);
  const [lang, setLang] = useState([]);
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    APIManager.getInstance().then((instance) => {
      if (session && session.user && session.user.email) {
        instance.findUser(session.user.email).then((res) => {
          console.log(`HI ${username}`);
          if (username === "") setUsername(res.username);
          if (projects.length === 0) setProjects(res.projects);
          if (lang.length === 0) setLang(res.languages);
          if (desc.length === 0) setDesc(res.description);
        });
      }
    });
    console.log(username);
  }, [session]);

  // @ts-ignore
  return (
    <>
      <LogInButton></LogInButton>
      <TopBar></TopBar>
      <Box
        sx={{
          height: "calc(100vh)",
          width: "100%",
          backgroundColor: "#E8E5E0",
        }}
      >
        <Grid container direction="row" alignItems="center" spacing={2}>
          <LeftMenuProfile
            username={username}
            languages={lang}
            projects={projects}
          />
          <Grid
            item
            xs={9}
            sx={{
              backgroundColor: "rgba(82,78,78,0.35)",
              height: "calc(100vh-55px)",
            }}
          >
            {" "}
            <Box height={"calc(100vh-55px)"}>
              <MiddleContent desc={desc} />
            </Box>
            <Button
              variant="outlined"
              color="warning"
              sx={{ position: "fixed", right: "20px", top: "70px" }}
            >
              Collaborate
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function ProfilePage() {
  return (
    <GlobalStore>
      <SessionProvider>
        <Profile />
      </SessionProvider>
    </GlobalStore>
  );
}
export default ProfilePage;
