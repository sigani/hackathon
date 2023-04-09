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
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ExtensionIcon from "@mui/icons-material/Extension";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AspectRatio from "@mui/joy/AspectRatio";

let pastproject = false;
let title = "Username";
let description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
let projectIm = "/projects/p1.png";
let name = "Coder#134";
let badges = [
  MilitaryTechIcon,
  WorkspacePremiumIcon,
  ExtensionIcon,
  SportsEsportsIcon,
];
let projectsCompleted = 8;
let languages = ["Python", "JavaScript", "Java", "C++"];

function UserSummary({ handleOpen }: any) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleOpen}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        paddingLeft={"20px"}
        paddingTop={"20px"}
        width={"100%"}
      >
        <Grid item width={"25%"} minWidth={"60px"}>
          <AspectRatio
            ratio="1/1"
            sx={{
              width: "100%",
              borderRadius: "500px",
            }}
          >
            <Avatar
              src={"../superhero-icon-original.svg"}
              sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "orange",
              }}
            />
          </AspectRatio>
        </Grid>
      </Grid>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Grid item paddingRight={"20px"}>
          <Typography
            color={"#4D4D4D"}
            gutterBottom
            variant="body2"
            component="div"
          >
            Completed Projects: {projectsCompleted}
          </Typography>

          <Typography
            color={"#4D4D4D"}
            gutterBottom
            variant="body2"
            component="div"
          >
            Languages:{" "}
            <Grid container direction={"row"}>
              {languages.map((lang) => {
                return (
                  <Grid item paddingRight={"5px"}>
                    {" "}
                    <Typography variant="body2">{lang}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Typography>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Button sx={{ color: "grey" }} size="small">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default function UserCards() {
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
        <UserSummary handleOpen={handleOpen} />
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
              Go to profile
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
