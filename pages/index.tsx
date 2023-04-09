import { Container, Grid, Stack } from "@mui/material";
import SearchJobs from "./components/SearchJobs";
import Jobs from "./components/Jobs";
import TopBar from "./components/TopBar";
import GlobalStore from "../store/GlobalStore";
import APIManager from "../utils/APIManager";
import LogInButton from "./components/LogInButton";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  APIManager.getInstance().then((instance) => {
    instance.getProjects().then((res) => {
      console.log(res);
    });
  });

  return (
    <SessionProvider>
      {/*<HeadComponent></HeadComponent>*/}
      <GlobalStore>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          paddingBottom={"500px"}
        >
          <TopBar />
          <SearchJobs />
          <Jobs />
        </Stack>
        <LogInButton />
      </GlobalStore>
    </SessionProvider>
  );
}
