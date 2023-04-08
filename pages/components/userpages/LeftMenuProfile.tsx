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
        height={"calc(100vh - 55px)"}
        sx={{
          backgroundColor: "rgba(0,0,0,0.81)",
          boxShadow: 5,
          top: "55px",
          overflowY: "scroll",
          position: "fixed",
          minWidth: "25%",
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          padding={"60px"}
          width={"100%"}
          height={"45%"}
        >
          <Avatar
            src={"../superhero-icon-original.svg"}
            sx={{
              minWidth: "100%",
              height: "100%",
              backgroundColor: "orange",
            }}
          />
        </Grid>
        <Grid paddingLeft="20%" paddingRight="20%" height={"0"}>
          <Box
            padding="20px"
            minHeight={"300px"}
            textAlign={"left"}
            height={"calc(100vh - 369px)"}
            sx={{
              boxShadow: 2,
              backgroundColor: "rgba(232,229,224,0.08)",
              border: "solid",
              borderColor: "rgba(232,229,224,0.08)",
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
