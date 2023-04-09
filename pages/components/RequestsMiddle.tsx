import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import PastProjectGrid from "./userpages/PastProjectGrid";
import CurrentProjectGrid from "./userpages/CurrentProjectGrid";
import ProjectCards from "./userpages/ProjectCards";
import UserCards from "./topContributors/UserCards";

let potentialUsers = [
  "ByteBoss",
  "ScriptMaster",
  "PixelPirate",
  "HackHustler",
  "CodeCrusader",
  "ProgramPro",
  "CoderChick",
  "TechTitan",
  "CodeCommander",
  "ScriptSlinger",
];
let colours = [
  "#FF0000 ",
  "#00FF00",
  "#0000FF ",
  "#FFFF00 ",
  "#FF00FF ",
  "#00FFFF ",
  "#800000",
  "#008000 ",
  "#000080 ",
  "#808000 ",
  "#800080 ",
  "#008080 ",
  "#FFA500 ",
  "#FFC0CB ",
  "#FFD700 ",
];
const numbers = [10, 3, 7, 9, 12, 15, 17, 8, 22, 5, 30, 15, 1, 15, 5, 6];

function RequestsMiddle() {
  return (
    <>
      <Grid
        xs={11}
        alignItems="center"
        direction="column"
        justifyContent="center"
        style={{ textAlign: "left" }}
        sx={{
          backgroundColor: "rgb(255,255,255)",
          boxShadow: 5,
          position: "fixed",
          left: "25%",
          width: "70%",
          height: "100%",
        }}
      >
        <Grid
          position={"relative"}
          justifyContent="center"
          padding="10px"
          sx={{ height: "100%", overflowY: "scroll" }}
        >
          <Grid paddingLeft="5%" paddingRight="5%">
            <h1>Pending Requests</h1>
            <h2>Potential Collaborators</h2>
            <Grid container direction={"row"}>
              {potentialUsers.map((name, index) => {
                return (
                  <Grid padding="20px">
                    <UserCards
                      name={name}
                      colour={colours[index]}
                      projects={numbers[index]}
                    ></UserCards>
                  </Grid>
                );
              })}
            </Grid>
            <h2>Your requested projects</h2>
            <PastProjectGrid></PastProjectGrid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default RequestsMiddle;
