import React from "react";
import { Outlet } from "react-router-dom";
import SideNavigation from "../components/navigation/SideNavigation";
import Header from "../components/header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <SideNavigation />
      <div className="w-full flex justify-center">
        <Outlet />
      </div>
    </>
  );
};

export default App;
