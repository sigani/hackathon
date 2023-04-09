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
import ProjectCards from "../userpages/ProjectCards";
import FilterPopup from "./FilterPopup";
import GlobalStore from "../../../store/GlobalStore";
import LogInButton from "../LogInButton";
import { SessionProvider } from "next-auth/react";

let pastproject = false;
let title = "BlackJack";
let description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
let projectIm = "/projects/p1.png";
let projects = [
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
        <LogInButton></LogInButton>
        <FilterPopup></FilterPopup>
        <Grid
          container
          direction={"row"}
          paddingLeft={"5%"}
          paddingRight={"5%"}
        >
          {projects.map(() => {
            return (
              <Grid xs={12} sm={6} md={4} lg={3} padding={"30px"}>
                <ProjectCards></ProjectCards>
              </Grid>
            );
          })}
        </Grid>
      </GlobalStore>
    </SessionProvider>
  );
}

export default function ProjectCard() {
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
            <Button variant="contained" color="warning" onClick={handleClose}>
              Apply to Join
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
