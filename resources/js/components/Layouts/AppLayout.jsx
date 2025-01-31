import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />

      <div className="">
        <main>
          <Outlet />
          
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
