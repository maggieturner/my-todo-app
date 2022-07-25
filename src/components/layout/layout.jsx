import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/header";

// Componenet layout provided layout structure of App.

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header showSearch={location.pathname !== "/add"} />
      <Outlet />
    </>
  );
};

export default Layout;
