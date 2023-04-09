import { Button, Grid, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useMainContext } from "../../store/MainContext";

export default function LogInButton() {
  const { isLoggedIn } = useMainContext();
  return isLoggedIn ? (
    <Grid height={0} position={"absolute"}></Grid>
  ) : (
    <Button
      variant="contained"
      sx={{
        width: "240px",
        position: "fixed",
        bottom: "40px",
        alignContent: "center",
        borderRadius: "20px",
        bgcolor: "rgba(0,0,0,0.68)",
        left: "50%",
        marginLeft: "-125px",
        ":hover": {
          bgcolor: "rgba(37,37,37,0.37)",
          color: "white",
        },
      }}
    >
      <LoginIcon />
      <Typography variant={"body2"} paddingLeft={"20px"}>
        Log in to continue
      </Typography>
    </Button>
  );
}
