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
import ProjectCards from "./userpages/ProjectCards";

// function Job({ handleOpen }: any) {
//   return (
//     <Grid item xs={4}>
//       <Box borderRadius={3} border={1} height={"250px"} bgcolor={"lightgray"}>
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           height="inherit"
//           onClick={handleOpen}
//           sx={{ cursor: "pointer" }}
//         >
//           <Grid item height={"30%"} width={"30%"} border={1}>
//             Hi
//           </Grid>
//           <Grid item xs={2}></Grid>
//           <Grid item>
//             <Stack>
//               <div>Name of project</div>
//               <div>______________</div>
//               <div>Type</div>
//               <div>______________</div>
//               <div>Language(s)</div>
//               <div>______________</div>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Box>
//     </Grid>
//   );
// }

// should i rename this?  idk
export default function Jobs() {
  // would first make api call to get all available projectsq

  return (
    <>
      <Grid
        container
        width={"60%"}
        height={"30vh"}
        alignItems={"top"}
        justifyContent={"center"}
        columns={14}
        rowSpacing={5}
      >
        <Grid item xs={4} padding={"20px"}>
          <ProjectCards />
        </Grid>
        <Grid item xs={4} padding={"20px"}>
          <ProjectCards />
        </Grid>
        <Grid item xs={4} padding={"20px"}>
          <ProjectCards />
        </Grid>
        <Grid item xs={4} padding={"20px"}>
          <ProjectCards />
        </Grid>
        <Grid item xs={4} padding={"20px"}>
          <ProjectCards />
        </Grid>
        <Grid item xs={4} padding={"20px"}>
          <ProjectCards />
        </Grid>
      </Grid>
    </>
  );
}
