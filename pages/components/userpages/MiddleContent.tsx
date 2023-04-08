import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import PastProjectGrid from "./PastProjectGrid";
import CurrentProjectGrid from "./CurrentProjectGrid";
import ProjectCards from "./ProjectCards";

let aboutme =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

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
              <div>{aboutme}</div>
            </Box>
            <h1>Current Projects</h1>
            <CurrentProjectGrid></CurrentProjectGrid>
            <h1>Past Projects</h1>
            <PastProjectGrid></PastProjectGrid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default MiddleContent;
