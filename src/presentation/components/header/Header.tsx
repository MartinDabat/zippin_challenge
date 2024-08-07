import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ZippinLogo from "../../../assets/logo.png";

export const Header = () => {
  return (
    <AppBar
      component="nav"
      position="fixed"
      sx={{ bgcolor: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ paddingLeft: 240 }}>
        <Box
          component="img"
          sx={{
            height: 64,
          }}
          alt="Zippin Logo"
          src={ZippinLogo}
        />
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: "black",
            marginLeft: 10,
          }}
        >
          Challenge
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
