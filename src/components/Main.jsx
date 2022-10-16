import React from "react";
import { Navbar, About } from "./index";

const Main = () => {
  return (
    <div id="outerWrapper">
      <Navbar />
      <main id="main">
          <About />
      </main>
    </div>
  );
};

export default Main;
