import { Box, Grid } from "@mui/material";

function Job() {
  return (
    <Grid item xs={4}>
      <Box border={1} height={"100px"}>
        HALLO
      </Box>
    </Grid>
  );
}

export default function Jobs() {
  return (
    <Grid
      container
      spacing={2}
      border={1}
      width={"60%"}
      height={"30vh"}
      alignItems={"top"}
      justifyContent={"center"}
      columns={12}
    >
      <Job />
      <Job />
      <Job />
    </Grid>
  );
}
