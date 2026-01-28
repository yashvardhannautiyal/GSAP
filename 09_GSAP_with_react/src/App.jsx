import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 1100,
      duration: 2,
      delay: 1,
      rotate: 720,
    });
  });

  return (
    <main>
      <div className="box" ref={gsapRef}></div>

      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>

    <div className="cont2">
        <div className="circle"></div>
        <div className="box"></div>
      </div>

    </main>
  );
};

export default App;
