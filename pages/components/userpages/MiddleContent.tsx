import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import ProjectGrid from "./ProjectGrid";

function MiddleContent() {
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
          height: "calc(100vh - 55px)",
        }}
      >
        <Grid
          position={"relative"}
          justifyContent="center"
          padding="10px"
        ></Grid>
        <Grid paddingLeft="5%" paddingRight="5%">
          <h1>About Me</h1>
          <Box
            padding="20px"
            textAlign={"left"}
            sx={{
              boxShadow: 0,
              backgroundColor: "rgba(232,229,224,0.13)",
            }}
          >
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </Box>
          <h1>Projects</h1>
          <ProjectGrid></ProjectGrid>
        </Grid>
      </Grid>
    </>
  );
}
export default MiddleContent;
