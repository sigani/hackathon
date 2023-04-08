import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Project } from "../../interfaces/Project";

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

const languages = [
  "C/C++",
  "Java",
  "JavaScript/TypeScript",
  "C#",
  "Matlab/Julia",
  "Python",
];

const nullDate = new Date(0);

export default function AddAProject(props: any) {
  const [type, setType] = useState("");
  const [language, setLang] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(nullDate);
  const [endDate, setEndDate] = useState(nullDate);
  const [desc, setDesc] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleChangeLang = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setLang(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
                  label="Title*"
                  defaultValue=""
                  helperText="What will your project be called"
                  variant="standard"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">Type*</InputLabel>
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
                  Upload an Image
                </InputLabel>
                <input type="file" />
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
                <InputLabel id="demo-multiple-chip-label">Languages</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={language}
                  onChange={handleChangeLang}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected: string[]) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value: any) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {languages.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
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
            >
              Submit
            </Button>
          </DialogActions>
        </LocalizationProvider>
      </Dialog>
    </>
  );
}
