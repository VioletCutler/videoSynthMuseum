import React from "react";
import { Navbar, About, LZXVidiot, VideoSynthesizers } from "./index";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div id="outerWrapper">
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="lzxvidiot" element={<LZXVidiot />} />
          <Route path='videosynthesizers' element={<VideoSynthesizers/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default Main;
