import { Grid } from "@mui/material";
import ProjectCards from "./ProjectCards";

let projectarray = ["P1", "p2", "p3", "p4"];
function PastProjectGrid() {
  return (
    <>
      <Grid container>
        {projectarray.map((project, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} padding={"20px"}>
              <ProjectCards />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default PastProjectGrid;
