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
  Box,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ProjectType } from "../../../interfaces/ProjectType";

let pastproject = false;
let title = "BlackJack";
let description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
let projectIm = "/projects/p1.png";

function ProjectSummary({ handleOpen }: any) {
  return (
    <Box
      width="100%"
      paddingRight={"30px"}
      paddingTop={"30px"}
      display="flex"
      justifyContent="flex-end"
    >
      <Button variant="outlined" color="warning" onClick={handleOpen}>
        Filter
      </Button>
    </Box>
  );
}

export default function FilterPopup() {
  const [type, setType] = useState("Any");
  // would first make api call to get all available projects
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    console.log("hallo");
    setOpen(false);
  };
  function handleOpen() {
    setOpen(true);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

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
        <DialogTitle id="alert-dialog-title">Filters</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container direction={"column"}>
              <Grid paddingBottom={"20px"}>
                <FormControlLabel
                  label="Not yet started"
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "orange",
                        "&.Mui-checked": {
                          color: "orange",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  label="Started projects"
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "orange",
                        "&.Mui-checked": {
                          color: "orange",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  label="Completed projects"
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "orange",
                        "&.Mui-checked": {
                          color: "orange",
                        },
                      }}
                    />
                  }
                />
              </Grid>
              <Grid paddingBottom={"20px"}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    label="All projects"
                    value={"all"}
                    control={
                      <Radio
                        sx={{
                          color: "orange",
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Looking for team only"
                    value={"team"}
                    control={
                      <Radio
                        sx={{
                          color: "orange",
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                  />
                </RadioGroup>
              </Grid>
              <Grid paddingBottom={"20px"}>
                {" "}
                <InputLabel id="demo-simple-select-label">
                  Type of Project
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  defaultValue="Any"
                  onChange={handleChange}
                  color={"success"}
                  sx={{ minWidth: "300px" }}
                >
                  {Object.entries(ProjectType).map(([code, name]) => (
                    <MenuItem value={name}>{name}</MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "grey" }} onClick={handleClose}>
            Close
          </Button>
          <Button variant="outlined" color="warning" onClick={handleClose}>
            Filter
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
