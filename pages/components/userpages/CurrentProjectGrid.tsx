import { Grid } from "@mui/material";
import ProjectCards from "./ProjectCards";

let projectarray = ["P1", "p2", "p3", "p4"];
function PastProjectGrid() {
  return (
    <>
      <Grid container paddingBottom={"100px"}>
        {projectarray.map((project, index) => {
          return (
            <Grid item xs={4} padding={"20px"}>
              <ProjectCards></ProjectCards>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default PastProjectGrid;
