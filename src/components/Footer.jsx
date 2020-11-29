import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {}
   
<h1>Skills</h1>
<div class="container">
  <div class="skills html"> Html 60% </div>
</div>
<div class="container">
  <div class="skills swift"> Swift 55%</div>
</div>

<div class="container">
  <div class="skills js">65%</div>
</div>

<div class="container">
  <div class="skills java"> java 80%</div>
</div>

    </footer>
  );
}

export default Footer;
