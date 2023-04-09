import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { CssBaseline, Grid, Link } from "@mui/material";
import { useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import EditUserPopUp from "./EditUserPopUp";

const pages = ["Popular Projects", "Contributors", "SEARCH"];
const settings = ["Profile", "Edit Account", "Requests", "Logout"];
const linksPages = [
  "/components/popular/PopularProjects",
  "/components/topContributors/TopContributors",
  "/",
];
const linksSettings = [
  "/components/userpages/ProfilePage",
  "/",
  "/components/Requests",
  "/api/auth/signout",
];

function TopBar() {
  const { data: session, status } = useSession() ?? {};
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  useEffect(() => {}, [session]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const name = (session: any) => {
    if (session === undefined || session === null) return "Anonymous";
    if (session.user === undefined || session.user === null) return "Anonymous";
    if (session.user.name === null || session.user.name === undefined) {
      if (session.user.email === null || session.user.email === undefined) {
        return "Anonymous";
      } else {
        return session.user.email;
      }
    } else {
      return session.user.name;
    }
  };

  return (
    <SessionProvider>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{ height: "55px", backgroundColor: "rgb(47,47,47)" }}
      >
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{ height: "55px", padding: "0", margin: "0" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {"</>"} CodeCoop
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/*<MenuIcon />*/}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href="/">
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {"</>"} CodeCoop
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Link
                  href={linksPages[index]}
                  color="inherit"
                  underline="hover"
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }} height={"55px"}>
              <Grid
                container
                direction={"row"}
                height={"55px"}
                alignContent={"center"}
              >
                <Grid item sx={{ height: "55px", padding: "14px" }}>
                  <Typography color={"white"}>
                    {session ? <strong>{name(session)}</strong> : "Anonymous"}
                  </Typography>
                </Grid>

                <Tooltip
                  title={session ? "Profile Options" : "Login to continue"}
                >
                  <Grid>
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar
                        alt={name(session)}
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Grid>
                </Tooltip>
              </Grid>
              {session && (
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
                    <Link underline="none" href={linksSettings[0]}>
                      <Typography
                        textAlign="center"
                        variant="body1"
                        sx={{ color: "#4D4D4D", borderColor: "#4D4D4D" }}
                      >
                        {settings[0]}
                      </Typography>
                    </Link>
                  </MenuItem>
                  <EditUserPopUp setAnchor={setAnchorElUser} />
                  <MenuItem key={settings[2]} onClick={handleCloseUserMenu}>
                    <Link href={linksSettings[2]} underline="none">
                      <Typography
                        textAlign="center"
                        variant="body1"
                        sx={{ color: "#4D4D4D", borderColor: "#4D4D4D" }}
                      >
                        {settings[2]}
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem key={settings[3]} onClick={handleCloseUserMenu}>
                    <Link href={linksSettings[3]} underline="none">
                      <Typography
                        textAlign="center"
                        variant="body1"
                        sx={{ color: "#4D4D4D", borderColor: "#4D4D4D" }}
                      >
                        {settings[3]}
                      </Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </SessionProvider>
  );
}
export default TopBar;
