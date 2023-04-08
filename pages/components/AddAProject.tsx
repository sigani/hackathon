import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const types = [
  "Artificial Intelligence",
  "Computer Graphics and Visualization",
  "Database Systems",
  "Human-Computer Interaction",
  "Networking",
  "Operating Systems",
  "Programming Languages and Compilers",
  "Software Engineering",
  "Computer Security and Cryptography",
  "Video Games",
  "Other",
];

export default function AddAProject(props: any) {
  const [type, setType] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <>
      <Grid container justifyContent={"center"} height={"100%"}></Grid>
      {/* Popup after clicking on a thingy */}

      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"md"}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DialogTitle id="alert-dialog-title">Submit a Project</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="standard-helperText-required"
                  label="Title"
                  defaultValue=""
                  helperText="What will your project be called"
                  variant="standard"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  defaultValue="Any"
                  onChange={handleChange}
                  sx={{ minWidth: "300px" }}
                >
                  {types.map((t) => (
                    <MenuItem value={t}>{t}</MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">
                  Start Date
                </InputLabel>
                <DatePicker />
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">End Date</InputLabel>
                <DatePicker />
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">
                  Description
                </InputLabel>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: "grey" }} onClick={props.handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              // color="success"
              sx={{ backgroundColor: "#FA9E64" }}
              onClick={props.handleClose}
            >
              Submit
            </Button>
          </DialogActions>
        </LocalizationProvider>
      </Dialog>
    </>
  );
}
