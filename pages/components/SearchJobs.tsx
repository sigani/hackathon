import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardMedia,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import AddAProject from "./AddAProject";

const types = [
  "Any",
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

export default function SearchJobs({ updateCards }: any) {
  const [type, setType] = useState("Any");
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
      <AddAProject
        open={open}
        handleClose={handleClose}
        updateCards={updateCards}
      />
      <Grid
        container
        spacing={2}
        border={1}
        borderRadius={4}
        width={"75%"}
        bgcolor={"#E8E5E0"}
        alignItems={"center"}
        justifyContent={"center"}
        columns={12}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item p={1} xs={12} lg={3}>
            <InputLabel id="demo-simple-select-label">Keywords</InputLabel>
            <TextField id="outlined-basic" variant="outlined" fullWidth />
          </Grid>

          <Grid item p={1} xs={12} lg={3} width={"auto"}>
            <InputLabel id="demo-simple-select-label">
              Type of Project
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              defaultValue="Any"
              onChange={handleChange}
              fullWidth
            >
              {types.map((t) => (
                <MenuItem value={t}>{t}</MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item p={1} xs={12} lg={3}>
            <InputLabel id="demo-simple-select-label">Start Date</InputLabel>
            <DatePicker />
          </Grid>

          <Grid item p={1} xs={12} lg={3}>
            <InputLabel id="demo-simple-select-label">End Date</InputLabel>
            <DatePicker />
          </Grid>

          <Grid item p={1} xs={12} lg={1}>
            {/* spacing */}
          </Grid>

          <Grid item p={1} xs={12} lg={2}>
            <Button
              variant="contained"
              style={{ backgroundColor: "black", color: "#E8E5E0" }}
            >
              Filter
            </Button>
          </Grid>

          <Grid item p={1} xs={12} lg={3}>
            <Button
              variant="contained"
              style={{ backgroundColor: "black", color: "#E8E5E0" }}
              onClick={handleOpen}
            >
              Create a Project
            </Button>
          </Grid>
        </LocalizationProvider>
      </Grid>
    </>
  );
}
