function page1animation(){

var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button",{
    y: -20,
    opacity : 0,
    delay : 1,
    duration : 0.7,
    stagger: 0.15,
});

tl.from(".center-part1 h1",{
    x: -500,
    opacity: 0,
    duration: 0.7,
}, "-=0.3")


tl.from(".center-part1 p",{
    x: -200,
    opacity: 0,
    duration: 0.6,
})

tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part2 img",{
    opacity: 0,
    duration: 1,
}, "-=0.3") // "-=1 : runs inside timeline only but it animates early"


tl.from(".section1bottom img",{
    opacity:0,
    y: 30,
    stagger: 0.15,
    duration: 0.7
})
}

page1animation();

 function page2animation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top -20%",
        scrub : 2,
    }
});

tl2.from(".services",{
        y: 30,
        opacity: 0,
        delay: 0.4,
        duration: 1,
    })


tl2.from(".elem.line1.left",{
    x: -300,
    opacity: 0,
    duration: 1,
},"anim") //"anim" : random name; this will make both the elements with same name run together at same time

tl2.from(".elem.line1.right",{
    x: 300,
    opacity: 0,
    duration: 1,
},"anim")


tl2.from(".elem.line2.left",{
    x: -300,
    opacity: 0,
    duration: 1,
},"fam")

tl2.from(".elem.line2.right",{
    x: 300,
    opacity: 0,
    duration: 1,
},"fam")
 }

 page2animation();


