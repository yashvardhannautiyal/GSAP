// gsap.to("", {})   -  for moving object from initial position to final position.
// properties are written in {key : value} pair 
gsap.to("#box", {
    x : 1000,   // move in x-axis = 0px to 1000px
    duration : 2,    //time takes
    delay : 1,        //after what time animation takes place
    rotate : 360,   //rotate in degree by default
    backgroundColor : "blue", // chnages color to blue
    borderRadius: "50%",
    scale : 2,     // increase size; here 2x
    // repeat : 1, // first run default + repeat 1
     repeat : 2, // first run defautl + repeat 2 
    // repeat : -1, // runs infintely
    yoyo : true, // intial to final + final to initial
})



// gsap.from   => for moving object from final position to initial.

gsap.from("#box2", {
    x : 1000,       // move in x-axis = from 1000px to 0px
    duration : 4,
    delay : 1
})




// *********************************************************************************
//TEXT
gsap.from("h1", {
    // color : "red",  // from red to white
    opacity : 0,
    y : 20,
    duration : 1.5,
    delay : 1,
    // stagger : 1,      // makes different same elements to run seperately one at a time
    stagger : -1,      // run backwards
})




// *********************************************************************************
//TIMELINES

//MANUAL METHOD
// - asynchronous : to calculate time required

// gsap.to("#box3", {
//     x: 1500,
//     rotate : 360,
//     duration : 2,
//     delay : 1
// })

// gsap.to("#box4", {
//     x: 1500,
//     backgroundColor : "red",
//     duration : 2,
//     delay : 3,   // duration of box3 + delay of box3
// })

// gsap.to("#box5", {
//     x : 1500,
//     scale : 0.5,
//     borderRadius : "50%",
//     duration : 2,
//     delay : 5 // duration of box4 + delay of box3
// })






    // to avoid this we use timeline
var tl = gsap.timeline()

// tl.to("#box3" , {
//         x: 1500,
//     rotate : 360,
//     duration : 1.5,
//     delay : 1
// })

// tl.to("#box4", {
//         x: 1500,
//     backgroundColor : "red",
//     duration : 1.5,  //no need to give delay from now onwards as it will run just after the previous object
// })

// tl.to("#box5", {
//         x : 1500,
//     scale : 0.5,
//     borderRadius : "50%",
// })

tl.from("h2", {
    y : -30,
    opacity : 0,
    duration: 1,
    delay : 0.5
})

tl.from("h4",{
    y : -30,
    opacity : 0,
    duration :1,
    stagger : 0.3
})