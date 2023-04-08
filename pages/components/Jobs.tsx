import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

function Job() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    console.log("hallo");
    setOpen(false);
  };
  function handleOpen() {
    setOpen(true);
  }

  return (
    <Grid item xs={4}>
      <Box borderRadius={3} border={1} height={"250px"} bgcolor={"lightgray"}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="inherit"
          onClick={handleOpen}
          sx={{ cursor: "pointer" }}
        >
          <Grid item height={"30%"} width={"30%"} border={1}>
            Hi
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item>
            <Stack>
              <div>Name of project</div>
              <div>______________</div>
              <div>Type</div>
              <div>______________</div>
              <div>Language(s)</div>
              <div>______________</div>
            </Stack>
          </Grid>

          {/* Popup after clicking on a thingy */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"SUPER COOL PROJECT"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                SO LIKE I WANT TO BUILD CHATGPT BUT LIKE BETTER!! XD
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Grid>
      </Box>
    </Grid>
  );
}

// should i rename this?  idk
export default function Jobs() {
  // would first make api call to get all available projects

  return (
    <Grid
      container
      width={"60%"}
      height={"30vh"}
      alignItems={"top"}
      justifyContent={"center"}
      columns={14}
      rowSpacing={10}
    >
      <Job />
      <Grid item xs={1} />
      <Job />
      <Grid item xs={1} />
      <Job />

      <Job />
      <Grid item xs={1} />
      <Job />
      <Grid item xs={1} />
      <Job />
    </Grid>
  );
}
