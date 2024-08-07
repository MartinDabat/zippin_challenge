import { Box } from "@mui/material";
import { LeftMenu, ZippinMap } from "../components";

export const MapPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <LeftMenu />
      <ZippinMap />
    </Box>
  );
};
