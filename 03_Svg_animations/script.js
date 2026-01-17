var path = `M 10 100 Q 500 100 930 100`

var originalPath = `M 10 100 Q 500 100 930 100`

var string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets){
    // console.log("entered");
    //  console.log(dets); - give all the info about func
    //  console.log(dets.x); - gives the change in x axis
    //  console.log(dets.y); - gives the change in y axis

    path = `M 10 100 Q ${dets.x} ${dets.y} 930 100`

    // to move the string according to the change in y axis
    gsap.to("svg path", {
        attr:{d:path}, // we can change the attributes using gsap; d->svg
        duration : 0.3,
        ease: "power3.out"
    })

})


// to move the string to it's original location
string.addEventListener("mouseleave", function(){
    // console.log("leaved");
    gsap.to("svg path", {
        attr:{
            d: originalPath},
            duration : 1,
            ease :"elastic.out(1,0.2)"
    })
})