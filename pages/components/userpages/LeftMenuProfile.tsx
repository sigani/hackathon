import { Avatar, Box, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ExtensionIcon from "@mui/icons-material/Extension";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AspectRatio from "@mui/joy/AspectRatio";

let name = "Coder#134";
let badges = [
  MilitaryTechIcon,
  WorkspacePremiumIcon,
  ExtensionIcon,
  SportsEsportsIcon,
];
let projectsCompleted = 8;
// let languages = ["Python", "JavaScript", "Java", "C++"];

function LeftMenuProfile({
  username = "",
  languages = [],
  projects = [],
}: any) {
  return (
    <>
      <Grid
        xs={3}
        alignItems="center"
        direction="column"
        justifyContent="center"
        style={{ textAlign: "center" }}
        height={"calc(100vh - 55px)"}
        sx={{
          backgroundColor: "rgba(0,0,0,0.81)",
          boxShadow: 5,
          top: "55px",
          overflowY: "scroll",
          position: "fixed",
          minWidth: "25%",
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          padding={"60px"}
          width={"100%"}
          height={"45%"}
        >
          <AspectRatio
            ratio="1/1"
            sx={{
              width: "100%",
              borderRadius: "1000px",
            }}
          >
            <Avatar
              src={"../superhero-icon-original.svg"}
              sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "orange",
              }}
            />
          </AspectRatio>
        </Grid>
        <Grid paddingLeft="20%" paddingRight="20%">
          <Box
            padding="20px"
            minHeight={"300px"}
            textAlign={"center"}
            sx={{
              boxShadow: 2,
              backgroundColor: "rgba(232,229,224,0.08)",
              border: "solid",
              borderColor: "rgba(232,229,224,0.08)",
              borderRadius: "10px",
            }}
          >
            <Typography
              color={"rgba(255,255,255,0.6)"}
              variant={"body2"}
              paddingBottom={"5%"}
            >
              Hacker
            </Typography>
            <Typography color={"white"} variant={"body2"} paddingBottom={"15%"}>
              {username}
            </Typography>
            <Typography
              color={"rgba(255,255,255,0.6)"}
              variant={"body2"}
              paddingBottom={"5%"}
            >
              Badges
            </Typography>
            <Grid container direction={"row"} paddingBottom={"15%"}>
              {badges.map((badge) => {
                const Icon = badge;
                return (
                  <Grid xs={12} md={3}>
                    <Icon
                      sx={{
                        color: "white",
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Typography
              color={"rgba(255,255,255,0.6)"}
              variant={"body2"}
              paddingBottom={"5%"}
            >
              Projects Completed
            </Typography>
            <Typography color={"white"} variant={"body2"} paddingBottom={"15%"}>
              {projects.length}
            </Typography>
            <Typography
              color={"rgba(255,255,255,0.6)"}
              variant={"body2"}
              paddingBottom={"5%"}
            >
              Languages
            </Typography>
            <Grid
              container
              direction={"row"}
              paddingBottom={"15%"}
              justifyContent={"center"}
            >
              {languages.map((lang: any) => {
                return (
                  <Grid>
                    <Typography
                      color={"white"}
                      variant={"body2"}
                      paddingBottom={"5%"}
                    >
                      {lang + "\xa0\xa0"}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              container
              direction={"row"}
              alignItems="center"
              paddingBottom={"15%"}
            >
              <Grid padding={"5px"} xs={12} md={4}>
                <GitHubIcon color={"warning"}></GitHubIcon>
              </Grid>
              <Grid padding={"5px"} paddingTop={"8px"} xs={12} md={4}>
                <img height={"18px"} src="/discord.svg" />
              </Grid>
              <Grid padding={"5px"} xs={12} md={4}>
                <LinkedInIcon color={"warning"}></LinkedInIcon>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default LeftMenuProfile;
