import React from "react";
import { Link } from "react-router-dom";

const LZXVidiot = () => {
  return (
    <article className="outerContainer">
      <section className="innerContainer">
        <h2 className="title">How to Use the LZX Vidiot</h2>
        <p className="glow">
          This section of the site collects information and tutorials on how to
          use the LZX Vidiot. It will be a combination of information from the
          LZX Vidiot User Manual as well as some information gathered through
          research and experimentation. This is not meant to be an authoritative
          document by any means. We are not experts.
        </p>
      </section>
      <section className="innerContainer">
        <h3>What is the LZX Vidiot?</h3>
        <img
          id="lzxVidiot"
          src="http://cdn.shopify.com/s/files/1/0902/2828/products/LZX_Vidiot_side_grande.png?v=1577483933"
        ></img>
        <p>
          The LZX Vidiot is a 
           <Link to="/videosynthesizers">video synthesizer</Link>. It can create
          visual patterns as well as process video feeds and send those signals
          to a monitor or output.
        </p>
        <p className="quote">
          "Video synthesizers are experimental instruments. Freeform
          experimentation can be intimidating, especially without prior
          experience using audio synthesizers and CV (Control Voltage) signals
          to modulate parameters."
        </p>
      </section>
      <section className="innerContainer">
        <h3>How Does it Work?</h3>
        <h4>The Basics</h4>
        <p></p>
      </section>
    </article>
  );
};

export default LZXVidiot;
