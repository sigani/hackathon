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
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

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
      <Grid item p={3}>
        <InputLabel id="demo-simple-select-label">Type of Event</InputLabel>
        <TextField id="outlined-basic" label="Keywords" variant="outlined" />
      </Grid>

      <Grid item p={3}>
        <InputLabel id="demo-simple-select-label">Type of Event</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          defaultValue="Any"
          label="type"
          onChange={handleChange}
        >
          <MenuItem value={"Any"}>Any</MenuItem>
          <MenuItem value={"Children"}>Children</MenuItem>
          <MenuItem value={"Science"}>Science</MenuItem>
          <MenuItem value={"Nature"}>Nature</MenuItem>
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
    </Grid>
  );
}
