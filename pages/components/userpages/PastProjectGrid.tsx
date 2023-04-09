import { Grid } from "@mui/material";
import ProjectCards from "./ProjectCards";
import { Project } from "../../../interfaces/Project";

let projectarray = ["P1", "p2", "p3", "p4"];

let title = "BlackJack";
let description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

let dummyProject: Project = {
  name: title,
  type: "Video Game",
  languages: ["JavaScript"],
  description: description,
  owner: "69",
  members: ["69"],
  teamSize: 2,
  openForApplications: true,
  completed: true,
  photos: [],
  likes: [],
  website: "",
};

function PastProjectGrid() {
  return (
    <>
      <Grid container>
        {projectarray.map((project, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} padding={"20px"}>
              <ProjectCards project={dummyProject} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default PastProjectGrid;
