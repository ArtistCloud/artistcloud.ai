/* eslint-disable react/prop-types */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Layout = () => {
  return (
    <React.Fragment>
      <header className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
