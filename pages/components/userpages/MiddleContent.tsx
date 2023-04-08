import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import PastProjectGrid from "./PastProjectGrid";
import CurrentProjectGrid from "./CurrentProjectGrid";

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
            <h1>About Me</h1>
            <Box
              padding="20px"
              textAlign={"left"}
              sx={{
                boxShadow: 0,
                backgroundColor: "rgba(232,229,224,0.13)",
                overflowY: "scroll",
                height: "100%",
              }}
            >
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
            </Box>
            <h1>Current Projects</h1>
            <PastProjectGrid></PastProjectGrid>
            <h1>Past Projects</h1>
            <CurrentProjectGrid></CurrentProjectGrid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default MiddleContent;
