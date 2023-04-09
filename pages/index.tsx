import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import { Container, Grid, Stack } from "@mui/material";
import SearchJobs from "./components/SearchJobs";
import Jobs from "./components/Jobs";
import TopBar from "./components/TopBar";
import GlobalStore from "../store/GlobalStore";
import APIManager from "../utils/APIManager";
import { useEffect } from "react";

export default function Home() {
  return (
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
    </GlobalStore>
  );
}
