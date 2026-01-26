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
})


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
}, "-=1") // "-=1 : runs inside timeline only but it animates early"
