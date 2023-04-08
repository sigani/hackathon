import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

let projectarray = ["P1", "p2", "p3", "p4"];
function PastProjectGrid() {
  return (
    <>
      <Grid container>
        {projectarray.map((project, index) => {
          return (
            <Grid item xs={4} padding={"20px"}>
              <Box
                sx={{
                  minHeight: "200px",
                  backgroundColor: "white",
                  boxShadow: 2,
                  border: "solid",
                  borderColor: "rgba(232,229,224,0.08)",
                  borderRadius: "10px",
                }}
              >
                Project
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default PastProjectGrid;
