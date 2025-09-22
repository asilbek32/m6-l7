import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Footerr from "../footerr/footer";

function MainLAaout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footerr></Footerr>
    </>
  );
}

export default MainLAaout;
