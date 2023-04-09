import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TopBar from "../TopBar";
import LeftMenuProfile from "./LeftMenuProfile";
import MiddleContent from "./MiddleContent";
import GlobalStore from "../../../store/GlobalStore";
import LogInButton from "../LogInButton";
import * as React from "react";
import { SessionProvider } from "next-auth/react";

function ProfilePage() {
  return (
    <SessionProvider>
      <GlobalStore>
        <LogInButton></LogInButton>
        <TopBar></TopBar>
        <Box
          sx={{
            height: "calc(100vh)",
            width: "100%",
            backgroundColor: "#E8E5E0",
          }}
        >
          <Grid container direction="row" alignItems="center" spacing={2}>
            <LeftMenuProfile />
            <Grid
              item
              xs={9}
              sx={{
                backgroundColor: "rgba(82,78,78,0.35)",
                height: "calc(100vh-55px)",
              }}
            >
              {" "}
              <Box height={"calc(100vh-55px)"}>
                <MiddleContent />
              </Box>
              <Button
                variant="outlined"
                color="warning"
                sx={{ position: "fixed", right: "20px", top: "70px" }}
              >
                Collaborate
              </Button>
            </Grid>
          </Grid>
        </Box>
      </GlobalStore>
    </SessionProvider>
  );
}
export default ProfilePage;
