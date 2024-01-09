import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune"; // Add this import
import { gmailLogo } from "../Constants/constants";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
});
const SeachWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "& > svg": {
    marginLeft: 20,
  },
});
export default function Header({ toggleDrawer }) {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon onClick={toggleDrawer} color="action" />
        <img
          src={gmailLogo}
          alt="logo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <SeachWrapper>
          <SearchIcon color="action" />
          <InputBase color="action" placeholder="Search Mail" />
          <TuneIcon color="action" />
        </SeachWrapper>
        <OptionsWrapper>
          <HelpOutlineOutlinedIcon color="action" />
          <SettingsOutlinedIcon color="action" />
          <AppsOutlinedIcon color="action" />
          <AccountCircleOutlinedIcon color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
}
