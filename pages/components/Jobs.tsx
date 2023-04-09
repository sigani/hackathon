import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import APIManager from "../../utils/APIManager";
import { Project } from "../../interfaces/Project";
import ProjectCards from "./userpages/ProjectCards";

export default function Jobs(props: any) {
  return (
    <>
      <Grid
        container
        width={"100%"}
        height={"30vh"}
        alignItems={"top"}
        justifyContent={"center"}
        columns={14}
        rowSpacing={5}
      >
        {props.cards.map((project: Project) => {
          return (
            <Grid item sm={12} md={6} lg={4} padding={"0px"}>
              <ProjectCards project={project} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
