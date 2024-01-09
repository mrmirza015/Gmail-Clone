import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ComposedMail from "./ComposedMail";
import { useParams, NavLink } from "react-router-dom";
import { routes } from "../routes/routes";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
  marginLeft: "15px",
});

const Container = styled(Box)({
  padding: "8px",
  "& > ul": {
    padding: "10px 0 0 5px",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  "& > ul > a> li > svg ": {
    marginRight: 20,
  },
});
export default function SideBarContents() {
  const [openDialog, setOpenDialog] = useState(false);
  const { type } = useParams();

  const handleDialog = () => {
    setOpenDialog(true);
  };
  return (
    <Container>
      <ComposeButton onClick={() => handleDialog()}>
        <CreateIcon />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
            <ListItem
              style={
                type === data.name.toLowerCase()
                  ? {
                      backgroundColor: "#d3e3fd",
                      borderRadius: "0 15px 15px 0",
                    }
                  : {}
              }
            >
              <data.icon fontSize="small" />
              {data.title}
            </ListItem>
          </NavLink>
        ))}
      </List>
      <ComposedMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
}
