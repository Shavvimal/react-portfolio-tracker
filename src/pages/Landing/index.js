import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ParticlesComponent } from "../../components";
import { Header, DashboardLayout } from "../../layout";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Headers */}
      <Header />
      <main className="flex-grow">
        <DashboardLayout />
      </main>
      <ParticlesComponent id="tsparticles" />
    </div>
  );
};

export default Landing;
