// var tl = gsap.timeline({paused:true}); // this makes the timeline paused
var tl = gsap.timeline();

var menu = document.querySelector("#nav i");
var closeM= document.querySelector("#full i");

tl.to("#full",{
    right:0,
    duration: 0.8,
})

tl.from("#full h4", {
    x : 150,
    duration : 0.4,
    stagger : 0.3, //elements move one by one
    opacity : 0,
})

tl.from("#full i", {
    opacity : 0,
})

tl.pause(); // pauses the timeline animation

menu.addEventListener("click", function(){
    tl.play(); //plays the animation when clicked
})

closeM.addEventListener("click", function(){
    tl.reverse(); // reverses the animation 
})