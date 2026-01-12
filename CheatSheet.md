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

`gsap.to("", {})`:  for moving object from initial position to final position.



`{key : value pairs}` <br>
{ <br>
`x : 1000,` move in x-axis = 0px to 1000px  <br>
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
    `stagger : 1,` makes different same  elements to run seperately one at a time <br>
    `stagger : -1,` run backwards <br>
}


## TIMELINES
- used to make animations work after one element and another

#### MANUAL METHOD
 - asynchronous : to calculate time required
 - we need to calculate duration + delay of previous element

#### AUTOMATIC
 - using timeline() method
 - syntax : gsap.timeline()
 - no need to calculate for previous element; timeline() method does it automatically



-----------------------------------------------------------------------------
# 02_Scroll_Trigger

### SCROLL TRIGGER 
- is used to run animations when user scroll to the page
- a gsap pluggin, to use : 
google -> gsap cdn -> copy the ScrollTrigger.min.js script tag (same as script above)


`gsap.from("#page1 #box", { }) `: page1 -> box



### Scrub 
-   makes the animation work as we scroll, in earlier cases when the trigger point is hit the box animates, but here while we scroll the animation happens accordingly
- and if we scroll backward the animation also animates backwards

#### 2 methods 
-  scrub : true, (or false)
-  scrub : 1,   (rage 1- 5 according to the smoothness)


-----------------------------------------------------------------------------
03_SVG_Animations
-----------------------------------------------------------------------------
SVG - Scroller Vector Graphics