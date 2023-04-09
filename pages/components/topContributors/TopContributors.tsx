import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import TopBar from "../TopBar";
import ContributorsFilter from "./ContributorsFilter";
import UserCards from "./UserCards";
import LogInButton from "../LogInButton";
import GlobalStore from "../../../store/GlobalStore";
import { SessionProvider } from "next-auth/react";

let pastproject = false;
let title = "Username";
let description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
let projectIm = "/projects/p1.png";
let users = [
  "Cool Project",
  "Another cool project",
  "Woooo My great idea",
  "Best project ever",
  "Cool Project",
  "Another cool project",
  "Woooo My great idea",
  "Best project ever",
  "Cool Project",
  "Another cool project",
  "Woooo My great idea",
  "Best project ever",
  "Cool Project",
  "Another cool project",
  "Woooo My great idea",
  "Best project ever",
];

function ProjectSummary() {
  return (
    <SessionProvider>
      <GlobalStore>
        <TopBar></TopBar>
        <LogInButton />
        <ContributorsFilter></ContributorsFilter>
        <Grid
          container
          direction={"row"}
          paddingLeft={"5%"}
          paddingRight={"5%"}
        >
          {users.map(() => {
            return (
              <Grid
                container
                xs={12}
                sm={4}
                md={3}
                lg={2}
                padding={"30px"}
                alignItems={"stretch"}
                justifyContent="space-between"
              >
                <UserCards></UserCards>
              </Grid>
            );
          })}
        </Grid>
      </GlobalStore>
    </SessionProvider>
  );
}

export default function TopContributors() {
  // would first make api call to get all available projects
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    console.log("hallo");
    setOpen(false);
  };
  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      <Grid container justifyContent={"center"} height={"100%"}>
        <ProjectSummary />
      </Grid>
      {/* Popup after clicking on a thingy */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <Card
          sx={{ maxWidth: 345, padding: "20px", boxShadow: "none" }}
          onClick={handleOpen}
        >
          <CardMedia sx={{ height: 140 }} image={projectIm} />
        </Card>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description} {description} {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "grey" }} onClick={handleClose}>
            Close
          </Button>
          {!pastproject && (
            <Button variant="contained" color="success" onClick={handleClose}>
              Apply to Join
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
