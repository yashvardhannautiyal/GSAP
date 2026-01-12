gsap.from("#page1 #box", {   // page1 -> box
     scale : 0,
     duration : 2,
     rotate : 360,
     delay : 1
})



// page 2 

gsap.from("#page2 #box", {   // page2 -> box
     scale : 0,
     duration : 2,
     rotate : 360,
     delay : 1,
     // 1 method
    //  scrollTrigger : "#page2 #box"  

    // 2 method
    scrollTrigger : {
        trigger : "#page2 #box",    // starting point
        scroller : "body",
        // markers : true, // provides makers for start and end points : not for production
        start : "top 60%", //trigger point where the animation will start from the start of the 60% of the page
        end : "top 30%", // trigger point where the animation will end from end of the 30% of the page


//          Scrub :  makes the animation work as we scroll, in earlier cases when the trigger point is hit the box animates, but here while we scroll the animation happens accordingly
//  and if we scroll backward the animation also animates backwards
        // scrub : true,     boolean value
        scrub : 3,    // range 1-5 according to the smoothness
    }
})




// page 3 

gsap.from("#page3 h2", { // page3 -> h2
    opacity : 0,
    x : 500,
    duration : 2,
    scrollTrigger : {
        trigger : "#page3 h2",
        scroller : "body",
        // markers : true,
        start : "top 60%"
    }
})

gsap.from("#page3 h3", {  //// page3 -> h2
    opacity : 0,
    x : -500,
    duration : 2,
    scrollTrigger : {
        trigger : "#page3 h3",
        scroller : "body",
        // markers : true,
        start : "top 60%"

    }
})




// page 4
gsap.to("#page4 h1",{
    transform: "translateX(-190%)",   // moves text to the last
    scrollTrigger : {
        trigger : "#page4",
        scroller : "body",
        markers : true,
        start : "top 0%",
        // end : "top -100%",
         end : "top -150%",  // to make it more slowwer
        scrub : 5,
         //pin : it make the element stop at the particular location
         // also wheneever we use pin, we only trigger the parent element 
         pin : true,
 
    }
})