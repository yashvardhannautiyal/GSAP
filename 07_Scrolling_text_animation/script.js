window.addEventListener("wheel", function (dets) {
  // window : for overall window display of the screen || wheel : mouse movement
  // console.log(dets.deltaY); //gives value while we croll in Y-axis for both downward scroll (+ve) + upward scroll (-ve)

  if (dets.deltaY > 0) {
    // console.log("Downward scrolling");
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1, // repeats infinitely
      ease: "none",
    });
//image rotation
    gsap.to(".marque img", {
      rotate: 0,
    });
  } 
  else {
    // console.log("Upward scrolling");
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1, // repeats infinitely
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  }
});
