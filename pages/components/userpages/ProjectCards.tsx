import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";

let pastproject = false;
let title = "BlackJack";
let description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
let projectIm = "/projects/p1.png";

function ProjectSummary({ handleOpen }: any) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleOpen}>
      <CardMedia sx={{ height: 140 }} image={projectIm} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.substring(0, Math.min(150, description.length)) + "..."}
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

export default function ProjectCards() {
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
        <ProjectSummary handleOpen={handleOpen} />
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
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FA9E64" }}
              onClick={handleClose}
            >
              Apply to Join
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
