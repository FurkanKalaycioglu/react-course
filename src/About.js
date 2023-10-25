import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    console.log("test");
  });
  return <div className=" bg-red-500">About</div>;
}

export default About;
