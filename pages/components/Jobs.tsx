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
let projectIms = ["p0", "p1", "p2", "p3", "p4", "p5", "p6"];

export default function Jobs({ cards = [] }: any) {
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
        {cards.map((project: Project, index: number) => {
          return (
            <Grid item sm={12} md={6} lg={4} padding={"0px"}>
              <ProjectCards project={project} im={projectIms[index % 7]} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
