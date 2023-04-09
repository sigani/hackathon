import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCallback, useRef, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import { Project } from "../../../interfaces/Project";

let pastproject = false;
let title = "BlackJack";
let description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
let projectIm = "/projects/p1.png";

type TextFieldRef = RefObject<HTMLTextAreaElement>;

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

const cardSx = {
  width: "325px",
  "&:hover": {
    color: "gray",
    backgroundColor: "darkGray",
    cursor: "pointer",
  },
};

function ProjectSummary({ handleOpen, project }: any) {
  return (
    <Card sx={cardSx} onClick={handleOpen}>
      <CardMedia sx={{ height: 140 }} image={projectIm} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description.substring(0, Math.min(150, description.length)) +
            "..."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button sx={{ color: "grey" }} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default function ProjectCards({ project = dummyProject }: any) {
  console.log(project);
  // would first make api call to get all available projects
  const [open, setOpen] = useState(false);
  const [openApply, setOpenApply] = useState(false);
  const [msg, setMsg] = useState("");
  const textFieldRef: TextFieldRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
    setOpenApply(false);
    console.log(textFieldRef.current?.value);
  };

  function handleOpen() {
    setOpen(true);
  }
  const handleOpenApply = useCallback(() => {
    setOpenApply(true);
  }, [openApply]);

  function ApplyToProject() {
    return (
      <Dialog
        open={openApply}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogContent>
          <InputLabel id="demo-simple-select-label">
            Send a message to the creator
          </InputLabel>
          <br />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder="Tell the owner why you would like to join them!"
            inputRef={textFieldRef}
            // value={msg}
            // onChange={(event) => {
            //   console.log(event);
            //   setMsg(event.target.value);
            // }}
            fullWidth
          />
          <DialogActions>
            <Button sx={{ color: "grey" }} onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" color="success" onClick={handleClose}>
              Apply
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <Grid container justifyContent={"center"} height={"100%"}>
        <ProjectSummary handleOpen={handleOpen} project={project} />
      </Grid>
      {/* Popup after clicking on a thingy */}
      <ApplyToProject />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title">{project.name}</DialogTitle>
        <Card
          sx={{ maxWidth: 345, padding: "20px", boxShadow: "none" }}
          onClick={handleOpen}
        >
          <CardMedia sx={{ height: 140 }} image={projectIm} />
        </Card>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Type: {project.type}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Start Date: {project.startDate}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            End Date: {project.startDate}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Languages: {project.languages.toString().replaceAll(",", ", ")}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Desired Group Size: {project.teamSize}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Website: {project.website}
          </DialogContentText>
          <br />
          <DialogContentText id="alert-dialog-description">
            {project.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "grey" }} onClick={handleClose}>
            Close
          </Button>
          {!pastproject && (
            <Button
              variant="contained"
              color="success"
              onClick={handleOpenApply}
            >
              Apply to Join
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
