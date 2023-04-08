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
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

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
  "Other",
];

export default function SearchJobs() {
  const [type, setType] = useState("Any");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <Grid
      container
      spacing={5}
      border={1}
      borderRadius={4}
      width={"60%"}
      height={"30vh"}
      bgcolor={"#E8E5E0"}
      alignItems={"top"}
      justifyContent={"center"}
      columns={12}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item p={3}>
          <InputLabel id="demo-simple-select-label">Keywords</InputLabel>
          <TextField id="outlined-basic" variant="outlined" />
        </Grid>

        <Grid item p={3}>
          <InputLabel id="demo-simple-select-label">Type of Project</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            defaultValue="Any"
            label="type"
            onChange={handleChange}
          >
            {/* <MenuItem value={"Any"}>Any</MenuItem>
            <MenuItem value={"Children"}>Children</MenuItem>
            <MenuItem value={"Science"}>Science</MenuItem>
            <MenuItem value={"Nature"}>Nature</MenuItem> */}

            {types.map((t) => (
              <MenuItem value={t}>{t}</MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item p={3}>
          <InputLabel id="demo-simple-select-label">Start Date</InputLabel>
          <DatePicker />
        </Grid>

        <Grid item p={3}>
          <InputLabel id="demo-simple-select-label">End Date</InputLabel>
          <DatePicker />
        </Grid>

        <Grid item p={3}>
          <Button
            variant="contained"
            style={{ backgroundColor: "black", color: "#E8E5E0" }}
          >
            Filter
          </Button>
        </Grid>
        <Grid item xs={9}>
          {" "}
        </Grid>
      </LocalizationProvider>
    </Grid>
  );
}
