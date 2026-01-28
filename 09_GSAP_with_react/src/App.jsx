import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  // const gsapRef = useRef();

  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: 1100,
  //     duration: 2,
  //     delay: 1,
  //     rotate: 720,
  //   });
  // });


  const boxRef = useRef();
  useGSAP(() =>{
    gsap.from(boxRef.current, {
      rotate: 720,
      duration: 2,
      delay: 1,
    })
  })

  // useGSAP(() =>{
  //   gsap.from(".box",{
  //     rotate: 720,
  //     duration: 2,
  //     delay: 1,
  //   })
  // })

  return (
    <main>
      {/* <div className="box" ref={gsapRef}></div> */}

      <div className="container">
        <div className="circle"></div>
        <div className="box" ref={boxRef}></div>
      </div>

    <div className="cont2">
        <div className="circle"></div>
        <div className="box"></div>
      </div>

    </main>
  );
};

export default App;
