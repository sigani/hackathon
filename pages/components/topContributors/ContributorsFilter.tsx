import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Languages } from "../../../interfaces/Languages";

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

export default function ContributorsFilter() {
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
              <Grid container paddingBottom={"20px"} direction={"row"}>
                <Grid item paddingRight={"30px"}>
                  <InputLabel id="demo-simple-select-label">
                    Search by username
                  </InputLabel>
                  <TextField
                    inputProps={{ maxLength: 40 }}
                    color="success"
                    id="outlined-basic"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <InputLabel id="demo-simple-select-label">
                    Languages
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
                    {Object.entries(Languages).map(([code, name]) => (
                      <MenuItem value={name}>{name}</MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid paddingBottom={"20px"}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    label="All users"
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
                    label="Looking to start team only"
                    value={"start"}
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
                    label="Looking to join team only"
                    value={"join"}
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
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "grey" }} onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="warning" onClick={handleClose}>
            Filter
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
