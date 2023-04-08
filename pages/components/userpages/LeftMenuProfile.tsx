import { Avatar, Box, Grid } from "@mui/material";

function LeftMenuProfile() {
  return (
    <>
      <Grid
        xs={3}
        alignItems="center"
        direction="column"
        justifyContent="center"
        style={{ textAlign: "center" }}
        sx={{
          backgroundColor: "rgba(0,0,0,0.81)",
          boxShadow: 5,
          height: "calc(100vh - 55px)",
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          padding={"60px"}
        >
          <Avatar
            src={"../superhero-icon-original.svg"}
            sx={{
              width: "200px",
              height: "200px",
              backgroundColor: "orange",
            }}
          />
        </Grid>
        <Grid paddingLeft="20%" paddingRight="20%" height={"0"}>
          <Box
            padding="20px"
            minHeight={"300px"}
            textAlign={"left"}
            sx={{
              boxShadow: 2,
              backgroundColor: "rgba(232,229,224,0)",
              border: "solid",
              borderColor: "rgba(232,229,224,0.12)",
              borderRadius: "10px",
            }}
          >
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default LeftMenuProfile;
