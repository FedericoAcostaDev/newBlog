import React from "react";

import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <br />
      <Header />
      {children}
    </>
  );
};

export default Layout;
