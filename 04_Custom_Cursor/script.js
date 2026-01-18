var main =document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x, // on x-axis move to dets.x
        y : dets.y, //on y-axis move to dets.y
        duration : 0.2,
        ease : "back.out", // improves the smoothness
    })
})

imageDiv.addEventListener("mouseenter", function(){
cursor.innerHTML = "view more"; // this gives a gitter effect to overcome this we need to overlay it
    gsap.to(cursor, {
        scale : 4, // cursor size 4x
        backgroundColor : "#ffffff5c",
        
    })
})
imageDiv.addEventListener("mouseleave", function(){
cursor.innerHTML = ""
    gsap.to(cursor, {
        scale : 1,
        backgroundColor : "white"
    })
})