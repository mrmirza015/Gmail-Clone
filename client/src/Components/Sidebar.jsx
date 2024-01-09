import { Drawer, styled } from "@mui/material";
import SideBarContents from "./SideBarContents";

export default function Sidebar({ openDrawer }) {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModelProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: "250px",
          background: "#f5f5f5",
          borderRight: "none",
          height: "calc(100vh-64px)",
        },
      }}
    >
      <SideBarContents />
    </Drawer>
  );
}
