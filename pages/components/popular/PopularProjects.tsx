import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import TopBar from "../TopBar";
import ProjectCards from "../userpages/ProjectCards";
import FilterPopup from "./FilterPopup";
import { Project } from "../../../interfaces/Project";

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

let dummyProject: Project = {
  name: title,
  type: "Video Game",
  languages: ["JavaScript"],
  description: description,
  owner: "69",
  members: ["69"],
  teamSize: 2,
  openForApplications: true,
  completed: true,
  photos: [],
  likes: [],
  website: "",
};

function ProjectSummary() {
  return (
    <>
      <TopBar></TopBar>
      <FilterPopup></FilterPopup>
      <Grid container direction={"row"} paddingLeft={"5%"} paddingRight={"5%"}>
        {projects.map(() => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3} padding={"30px"}>
              <ProjectCards project={dummyProject} />
            </Grid>
          );
        })}
      </Grid>
    </>
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
            <Button variant="contained" color="success" onClick={handleClose}>
              Apply to Join
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
