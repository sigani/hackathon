import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

let projectarray = ["P1", "p2", "p3", "p4"];
function PastProjectGrid() {
  return (
    <>
      <Grid container>
        {projectarray.map((project, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} padding={"20px"}>
              <ProjectCard />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default PastProjectGrid;
