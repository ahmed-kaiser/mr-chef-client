import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared_components/Footer";
import Navbar from "../pages/Shared_components/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
