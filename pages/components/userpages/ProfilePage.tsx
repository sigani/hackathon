import { Avatar, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TopBar from "../TopBar";

function ProfilePage() {
  return (
    <>
      <TopBar />
      <Box
        sx={{
          height: "calc(100vh - 55px)",
          width: "100%",
          backgroundColor: "#E8E5E0",
        }}
      >
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid
            item
            xs={3}
            sx={{
              backgroundColor: "rgba(255,255,255,0.78)",
              height: "calc(100vh - 74px)",
            }}
          >
            <Grid
              height={"100%"}
              padding={"10%"}
              alignItems="center"
              direction="column"
              justifyContent="center"
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
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: "rgba(232,229,224,0.35)",
              height: "calc(100vh - 74px)",
            }}
            height={"100%"}
          >
            {" "}
            <Box height={"100%"}></Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              backgroundColor: "rgba(255,255,255,0.78)",
              height: "calc(100vh - 74px)",
            }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
}
export default ProfilePage;
