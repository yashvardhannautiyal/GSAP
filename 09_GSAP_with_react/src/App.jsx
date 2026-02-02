import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  // ---------------------useGSAP () -----------------
  // useGSAP(() =>{
  //   gsap.from(".box",{
  //     rotate: 720,
  //     duration: 2,
  //     delay: 1,
  //   })
  // })

  //----------------- useRef()-----------------
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
  useGSAP(() => {
    gsap.from(boxRef.current, {
      rotate: 720,
      duration: 2,
      delay: 1,
    });
  });

  //------------------ scope ----------------
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(".box", {
        rotate: 360,
        scale: 0,
        duration: 1,
        opacity: 0,
        delay: 0.5,
      });
      // }, {scope: ".container"}) OR
    },
    { scope: containerRef },
  );


  // -------------- gsap.utils -------------
  // dependencies
  const [boxVal, setBox] = useState(0);
  const random = gsap.utils.random(-500, 500, 100); //starting, end value, value_to_be_divisible_by

  useGSAP(() =>{
    gsap.to(".box", {
      x: boxVal,
      duration: 1,
      delay: 0.5,
    })
  // }, [boxVal]) or
  }, {scope:"containerRef"}, {dependencies :[boxVal]});


  // ------------------ conext safe -------------------------
  const boxRef2 = useRef();
  
  const {contextSafe} = useGSAP();

  const rotateBox = contextSafe(function(){
    gsap.to(boxRef2.current,{
      rotate: 360,
      duration: 1,
    })
  })


  return (
    <><main>
      {/* <div className="box" ref={gsapRef}></div> */}

      <div className="container" ref={containerRef}>
        <div className="box" ref={boxRef}></div>
      </div>

      <div className="cont2">
        <div className="box"></div>
      </div>

      <button
        onClick={() => {
          setBox(random);
            console.log(boxVal);
        }}
      >
        move
      </button>
    </main>

    {/* context safe  */}
        <div className="container">
          <button onClick={rotateBox}>Animate</button>
          <div className="box" ref={boxRef2}></div>
        </div>
    </>
  );
};

export default App;
