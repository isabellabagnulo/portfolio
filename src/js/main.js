import { burgermenu } from "./menu"
// import { gsap } from "gsap"
// import { Draggable } from "gsap/Draggable"

// gsap.registerPlugin(Draggable)

document.addEventListener("DOMContentLoaded", burgermenu())

const cat = document.querySelector("#btn-cat")

// Draggable.create(cat, {
//   type: "y",
//   edgeResistance: 0.15,
//   bounds: ".intro--wrapper",
//   trigger: cat,
//   onDragEnd: (e) => {
//     let yPos = e.pageY
//     let xPos = e.pageX
//     console.log("xpos:" + xPos + ", ypos:" + yPos)
//     // if (yPos < 60) {
//     //   window.location.href = "works.html"
//     // } else if (yPos > 600) {
//     //   window.location.href = "about.html"
//     // }
//   },
// })
