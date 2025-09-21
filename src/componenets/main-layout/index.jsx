import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

function MainLAaout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default MainLAaout;
