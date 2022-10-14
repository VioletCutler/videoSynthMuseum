import React from "react";
import { Navbar } from "./index";

const Main = () => {
  return (
    <div id="main">
            <Navbar />
      <h1>I am Main</h1>
      <section class='paragraph'>
      <p className="glow">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
      </section>
      
    </div>
  );
};

export default Main;
