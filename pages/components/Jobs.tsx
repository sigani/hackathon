import { Box, Grid, Stack } from "@mui/material";

function Job() {
  function doAction(): void {
    console.log("hi");
  }

  return (
    <Grid item xs={4}>
      <Box borderRadius={3} border={1} height={"250px"}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="inherit"
          onClick={doAction}
          sx={{ cursor: "pointer" }}
        >
          <Grid item height={"30%"} width={"30%"} border={1}>
            Hi
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item>
            <Stack>
              <div>Name of project</div>
              <div>______________</div>
              <div>Type</div>
              <div>______________</div>
              <div>Language(s)</div>
              <div>______________</div>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default function Jobs() {
  return (
    <Grid
      container
      width={"60%"}
      height={"30vh"}
      alignItems={"top"}
      justifyContent={"center"}
      columns={14}
      rowSpacing={10}
    >
      <Job />
      <Grid item xs={1} />
      <Job />
      <Grid item xs={1} />
      <Job />

      <Job />
      <Grid item xs={1} />
      <Job />
      <Grid item xs={1} />
      <Job />
    </Grid>
  );
}
