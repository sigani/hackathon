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
import APIManager from "../../utils/APIManager";

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
  const [members, setMembers] = useState(2);
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [website, setWebsite] = useState("");

  const handleClose = () => {
    setOpen(false);
    props.handleClose();
  };

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
    setCheck(false);
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

  const ConfirmationPage = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title">Success!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Project Successfully Added!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "grey" }} onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const createEvent = () => {
    if (name === "") {
      setCheck(true);
      return;
    }
    if (type === "") {
      setCheck(true);
      return;
    }

    let project: Project = {
      id: "69",
      name: name,
      type: type,
      startDate: startDate,
      endDate: endDate,
      languages: language,
      description: desc,
      owner: "69",
      members: ["69"],
      teamSize: members,
      openForApplications: true,
      completed: false,
      photos: [],
      likes: [],
      website: website,
    };

    console.log(project);

    APIManager.getInstance().then((instance) => {
      instance.insertProject(project).then(() => {
        setOpen(true);
      });
    });
  };

  return (
    <>
      <ConfirmationPage />
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
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setCheck(false);
                  }}
                  fullWidth
                  error={check}
                />
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label" error={check}>
                  Type*
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  defaultValue="Any"
                  onChange={handleChange}
                  sx={{ minWidth: "300px" }}
                  error={check}
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
                <DatePicker onChange={(nv) => setStartDate(nv as Date)} />
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">End Date</InputLabel>
                <DatePicker onChange={(nv) => setEndDate(nv as Date)} />
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
                  placeholder="What is the project about?"
                  onChange={(event) => setDesc(event.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">
                  Number of Members
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={members}
                  label="Members"
                  onChange={(event) => setMembers(event.target.value as number)}
                >
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={30}>6+</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">Website</InputLabel>
                <TextField
                  id="outlined-multiline-static"
                  onChange={(event) => setWebsite(event.target.value)}
                  placeholder={"GitHub, personal website, etc..."}
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
              onClick={createEvent}
            >
              Submit
            </Button>
          </DialogActions>
        </LocalizationProvider>
      </Dialog>
    </>
  );
}
