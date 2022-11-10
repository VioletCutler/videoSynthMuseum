import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="navbarLeft">
        <h1>Video Synth Museum</h1>
      </div>
      <div id="navbarRight">
        <Link to="/">Home</Link>
        <Link to="videosynthesizers">Video Synthesizers</Link>

        <Link to="LZXVidiot">LZX Vidiot</Link>
      </div>
    </nav>
  );
};

export default Navbar;
