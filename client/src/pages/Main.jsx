import React, { Suspense, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Emails from "../Components/Emails";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../Components/common/SuspenseLoader";
import { Box } from "@mui/material";

export default function Main() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Box>
        <Sidebar openDrawer={openDrawer}></Sidebar>
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet context={{ openDrawer }} />
        </Suspense>
      </Box>
    </>
  );
}
