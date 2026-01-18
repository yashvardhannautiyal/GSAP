# 01_Basics

#### Animation = movement of object from initial to final position.

## GSAP

- GreenSock Animation Platform
- JavaScript library for making animations in the website
- ALL the GSAP coding is done in JS file
- Library - gives a particular feature or a set of code that we can use in our project. (like React.js)

<br>

gsap cdn (google) - copyt first script and paste it above the linked script tag

`gsap.from("", {})`: for moving object from final position to initial.

`gsap.to("", {})`: for moving object from initial position to final position.

`{key : value pairs}` <br>
{ <br>
`x : 1000,` move in x-axis = 0px to 1000px <br>
`duration : 2,` time takes <br>
`delay : 1,` after what time animation takes place <br>
`rotate : 360,` rotate in degree by default <br>
`backgroundColor : "blue",` chnages color to blue <br>
`borderRadius: "50%",` <br>
`scale : 2,` increase size; here 2x <br>
`repeat : 1,` first run default + repeat 1 <br>
`repeat : 2,` first run defautl + repeat 2 <br>
`repeat : -1,` runs infintely <br>
`yoyo : true,` intial to final + final to initial <br>
`opacity : 0,` <br>
`stagger : 1,` makes different same elements to run seperately one at a time <br>
`stagger : -1,` run backwards <br>
}

### TIMELINES

- used to make animations work after one element and another

#### MANUAL METHOD

- asynchronous : to calculate time required
- we need to calculate duration + delay of previous element

#### AUTOMATIC

- using timeline() method
- syntax : gsap.timeline()
- no need to calculate for previous element; timeline() method does it automatically

<br>

---

# 02_Scroll_Trigger

### SCROLL TRIGGER

- is used to run animations when user scroll to the page
- a gsap pluggin, to use :
  google -> gsap cdn -> copy the ScrollTrigger.min.js script tag (same as script above)

`gsap.from("#page1 #box", { }) `: page1 -> box

####  method 1
- `scrollTrigger : "#page2 #box"`

#### Method 2
`scrollTrigger : {`<br>
        `trigger : "#page2 #box",`starting point <br>
        `scroller : "body",` <br>
        `markers : true,` provides makers for start and end points : not for production <br>
        `start : "top 60%",` trigger point where the animation will start from the start of the 60% of the page <br>
        `end : "top 30%",` trigger point where the animation will end from end of the 30% of the page <br>
    `pin : true,`- it make the element stop at the particular location <br> - also wheneever we use pin, we only trigger the parent element 
    <br>

    moving text while scrolling

        transform: "translateX(-190%)",   // moves text to the last
    scrollTrigger : {
        trigger : "#page4",
        scroller : "body",
        markers : true,
        start : "top 0%",
        // end : "top -100%",
         end : "top -150%",  // to make it more slowwer
        scrub : 5,
         pin : true,
    } 
`}`


### Scrub
- makes the animation work as we scroll
- earlier, when the trigger point is hit the box animates and the animation works, but here while we scroll the animation happens accordingly
- and if we scroll backward the animation also animates backwards

#### 2 methods

- `scrub : true,` (or false)
- `scrub : 1,` (rage 1- 5 according to the smoothness)

<br>

---

# 03_SVG_Animations

#### SVG 
- Scallable Vector Graphics
- it is a container
- whenevr we zoom an image their pixels become blury; to avoid this we use SVG's
- these as basically text using which we can create SVG
- google -> SVG path curve -> first mdn link

#### Curves
- line can be moulded or stretched from one point
- Quadratic curve : can be moulded from 3 sides (called as C)
- Cubic Curve : is a bit more complex because using this we can make several other curves; (called as Q)
- Bezier curve : can be moulded from 4 sides

<br>

from mdn - svg path curve : 

` <svg width="190" height="160"> ` width and height of svg container   <br>
  `<path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent" /> `
  : M (denotes move to point) from where to start the point <br>
  10 80 (denotes x-axis and y-axis) <br>
  Q (denotes cubic curve) <br>
  95 10 (denotes Center point; x-axis y-axis) <br>
  180 80 (denotes Last point; x-axis y-axis)
  <br>
  `stroke = "black"` : color of the line <br>
  `</svg>`


# 04_Custom_Cursor

