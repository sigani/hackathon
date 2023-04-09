import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Languages } from "../../interfaces/Languages";
import Typography from "@mui/material/Typography";
let aboutme =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

function ProjectSummary(props: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleEditAccount = () => {
    props.setAnchor(null);
    setModalOpen(true);
    props.handleOpen();
  };
  return (
    <MenuItem key={"Edit Account"} onClick={handleEditAccount}>
      {/*<Link href={linksSettings[1]}>*/}
      <Typography
        textAlign="center"
        variant="body1"
        sx={{ color: "#4D4D4D", borderColor: "#4D4D4D" }}
      >
        Edit Account
      </Typography>
      {/*</Link>*/}
    </MenuItem>
  );
}

export default function EditUserPopUp(props: any) {
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
        <ProjectSummary handleOpen={handleOpen} setAnchor={props.setAnchor} />
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
        <DialogTitle id="alert-dialog-title">My Profile</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container direction={"column"}>
              <Grid
                container
                paddingBottom={"20px"}
                direction={"row"}
                width={"100%"}
              >
                <Grid item paddingRight={"30px"} xs={4}>
                  <InputLabel id="demo-simple-select-label">
                    Username
                  </InputLabel>
                  <TextField
                    color="success"
                    id="outlined-basic"
                    variant="outlined"
                    inputProps={{ maxLength: 20 }}
                  />
                </Grid>
                <Grid item paddingRight={"30px"} xs={8}>
                  <InputLabel id="demo-simple-select-label">Email</InputLabel>
                  <TextField
                    color="success"
                    id="outlined-basic"
                    variant="outlined"
                    inputProps={{ maxLength: 40 }}
                    sx={{ width: "70%" }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                paddingBottom={"20px"}
                direction={"row"}
                width={"100%"}
              >
                <Grid item paddingRight={"30px"} xs={12} paddingBottom={"20px"}>
                  <InputLabel id="demo-simple-select-label">
                    About Me
                  </InputLabel>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    minRows={4}
                    defaultValue={aboutme}
                    color="success"
                    variant="outlined"
                    inputProps={{ maxLength: 40 }}
                    sx={{ width: "80%" }}
                  />
                </Grid>
              </Grid>
              <Grid container direction={"column"}>
                <Grid
                  container
                  paddingBottom={"20px"}
                  direction={"row"}
                  width={"100%"}
                >
                  <Grid item paddingRight={"30px"} xs={4}>
                    <InputLabel id="demo-simple-select-label">
                      GitHub Username
                    </InputLabel>
                    <TextField
                      color="success"
                      id="outlined-basic"
                      variant="outlined"
                      inputProps={{ maxLength: 20 }}
                    />
                  </Grid>
                  <Grid item paddingRight={"30px"} xs={4}>
                    <InputLabel id="demo-simple-select-label">
                      Discord Username
                    </InputLabel>
                    <TextField
                      color="success"
                      id="outlined-basic"
                      variant="outlined"
                      inputProps={{ maxLength: 40 }}
                    />
                  </Grid>
                  <Grid item paddingRight={"30px"} xs={4}>
                    <InputLabel id="demo-simple-select-label">
                      LinkedIn
                    </InputLabel>
                    <TextField
                      color="success"
                      id="outlined-basic"
                      variant="outlined"
                      inputProps={{ maxLength: 40 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid paddingBottom={"20px"}>
                <FormControlLabel
                  label="Looking to start team"
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
                  label="Looking to join existing team"
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
            </Grid>
            <Grid paddingBottom={"20px"}>
              <Grid item>
                <InputLabel id="demo-simple-select-label">Languages</InputLabel>
                {Object.entries(Languages).map(([code, name]) => (
                  <FormControlLabel
                    label={name}
                    control={
                      <Checkbox
                        checked={false}
                        sx={{
                          color: "orange",
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                  />
                ))}
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "grey" }} onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="warning" onClick={handleClose}>
            Apply Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
