import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

let projectarray = ["P1", "p2", "p3", "p4"];
function PastProjectGrid() {
  return (
    <>
      <Grid container paddingBottom={"100px"}>
        {projectarray.map((project, index) => {
          return (
            <Grid item xs={4} padding={"20px"}>
              <ProjectCard></ProjectCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default PastProjectGrid;
