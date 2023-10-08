import React from "react";
import { Outlet } from "react-router-dom";
import SideNavigation from "../components/navigation/SideNavigation";
import Header from "../components/header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <SideNavigation />
      <div className="w-full px-3 bg-sand-500 min-h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
    </>
  );
};

export default App;
