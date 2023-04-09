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

export default function Jobs() {
  const [cards, setCards] = useState<Project[]>([]);

  useEffect(() => {
    APIManager.getInstance().then((instance) => {
      instance.getProjects().then((res) => {
        setCards(res);
      });
    });
  }, []);

  return (
    <>
      <Grid
        container
        width={"60%"}
        height={"30vh"}
        alignItems={"top"}
        justifyContent={"center"}
        columns={14}
        rowSpacing={5}
      >
        {cards.map((project) => {
          return (
            <Grid item xs={4} padding={"20px"}>
              <ProjectCards project={project} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
