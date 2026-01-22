//ANIMATION 1

// function breakText(){
//     var h1 = document.querySelector("h1");

// var h1Text = h1.textContent; // this selects all the text in h1
// // console.log(h1Text);


// // console.log(h1Text);

// // var splittedText = h1Text.split(" "); //splits string on the basis of " " space
// var splittedText = h1Text.split(""); //splits every element of string || also it breaks it into array
// // console.log(splittedText);

// var clutter = ""; //empty string

// splittedText.forEach(function(elem){// will run 12 times
//     clutter = clutter + `<span>${elem}</span>`; // Hello World!
// })

// //  console.log(clutter);

// h1.innerHTML = clutter;
// }

// breakText();

//GSAP 

// gsap.from("h1 span", { //span is inline element
//     y : 50, // this means translate/transform y and inline elements cannot use in inline elements (to resolve this h1 span{display : inline-block;})
//     opacity : 0,
//     duration : 0.8,
//     delay : 0.5,
//     stagger : 0.15, //word break animation : one by one animation of text
//     // stagger : -0.15, //animates backwards
// })



// ANIMATION 2
function breakText(){
var h1 = document.querySelector("h1");
var h1Text = h1.textContent; 

var splittedText = h1Text.split(""); 
var halfValue = Math.floor(splittedText.length/2); // gives 6

var clutter = ""; //empty string

splittedText.forEach(function(elem, idx){// will run 12 times
    if(idx < halfValue){
        // console.log(elem);
        clutter += `<span class="firstHalf">${elem}</span>`;
    }
    else{
        // console.log("lol", elem);
        clutter += `<span class="secondHalf">${elem}</span>`;
    }
})

h1.innerHTML = clutter;
}

breakText();

gsap.from(".firstHalf", {
    y : 80,
    duration : 0.8,
    delay : 0.5,
    stagger : 0.15,
    opacity : 0,
})
gsap.from(".secondHalf", {
    y : 80,
    duration : 0.8,
    delay : 0.5,
    stagger : -0.15,
    opacity : 0,
})
