import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import { Container, Grid, Stack } from "@mui/material";
import TopBar from "./components/TopBar";
import SearchJobs from "./components/SearchJobs";
import Jobs from "./components/Jobs";

// export async function getServerSideProps(context: any) {
//   try {
//     await clientPromise;
//     // `await clientPromise` will use the default database passed in the MONGODB_URI
//     // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
//     //
//     // `const client = await clientPromise`
//     // `const db = client.db("myDatabase")`
//     //
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands

//     return {
//       props: { isConnected: true },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// }

export default function Home() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={10}
    >
      <TopBar />
      <SearchJobs />
      <Jobs />
    </Stack>
  );
}
