import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import PastProjectGrid from "./userpages/PastProjectGrid";
import CurrentProjectGrid from "./userpages/CurrentProjectGrid";
import ProjectCards from "./userpages/ProjectCards";
import UserCards from "./topContributors/UserCards";

let potentialUsers = [
  "CodeWizard",
  "ByteBoss",
  "TechGuru",
  "CyberNinja",
  "ScriptMaster",
  "PixelPirate",
  "SyntaxSavior",
  "DevGenius",
  "DataDiva",
  "HackHustler",
  "CodeCrusader",
  "ProgramPro",
  "LogicLord",
  "ByteBabe",
  "BugBasher",
  "AlgorithmAce",
  "CoderChick",
  "TechTitan",
  "CodeCommander",
  "ScriptSlinger",
];

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
              {potentialUsers.map((name) => {
                return (
                  <Grid padding="20px">
                    <UserCards name={name}></UserCards>
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
