import { Container, Grid, Stack } from "@mui/material";
import SearchJobs from "./components/SearchJobs";
import Jobs from "./components/Jobs";
import TopBar from "./components/TopBar";
import GlobalStore from "../store/GlobalStore";
import APIManager from "../utils/APIManager";
import { useEffect, useState } from "react";
import { Project } from "../interfaces/Project";
import LogInButton from "./components/LogInButton";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  const [cards, setCards] = useState<Project[]>([]);

  useEffect(() => {
    APIManager.getInstance().then((instance) => {
      instance.getProjects().then((res) => {
        setCards(res);
      });
    });
  }, []);

  function updateCards(c: Project[]) {
    setCards(c);
  }

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
          <SearchJobs updateCards={updateCards} />
          <Jobs cards={cards} />
        </Stack>
      </GlobalStore>
    </SessionProvider>
  );
}
