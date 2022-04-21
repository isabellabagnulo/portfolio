import { burgermenu } from "./menu"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(Draggable)

document.addEventListener("DOMContentLoaded", burgermenu())

// cat
const cat = document.querySelector("#btn-cat")
const catHeight = cat.offsetHeight
let top = document.querySelector("#cat-top").querySelectorAll("path")
let topFill = top[0]
let topStroke = top[1]

let bottom = document.querySelector("#cat-bottom").querySelectorAll("path")
let bottomFill = bottom[0]
let bottomStroke = bottom[1]

// blocks
let blocks = document.querySelectorAll(".intro-block")
let topBlock = blocks[0]
let bottomBlock = blocks[1]

// elements
let menu = document.querySelector(".burger")
let labelDrag = document.querySelector(".label-drag")
let logo = document.querySelector(".logo")
let social = document.querySelector(".menu-social")
let linkWorks = document.querySelector(".link-works")
let linkAbout = document.querySelector(".link-about")

Draggable.create(cat, {
  type: "y",
  edgeResistance: 0.15,
  bounds: ".intro--wrapper",
  trigger: cat,
  onDrag: function () {
    let offsetTop = catHeight / 5
    let offsetBottom = catHeight / 5
    let offsetRight = 0
    let B = document.querySelector(".intro--wrapper").getBoundingClientRect()

    this.applyBounds({
      top: -1 * offsetTop,
      left: 0,
      width: B.width - offsetRight,
      height: B.height + 2 * offsetBottom,
    })

    let perc = parseInt((100 * (this.y - this.maxY)) / (this.minY - this.maxY))
    let topPerc = perc
    let bottomPerc = 100 - perc

    // blocks
    gsap.to(topBlock, 1.2, {
      height: topPerc + "%",
      ease: "Power4.easeOut",
    })
    gsap.to(bottomBlock, 1.2, {
      height: bottomPerc + "%",
      ease: "Power4.easeOut",
    })

    // elements
    gsap.to(menu, 0.4, {
      x: 100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(labelDrag, 0.4, {
      x: 100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(logo, 0.4, {
      x: -100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(social, 0.4, {
      x: -100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(linkWorks, 0.4, {
      y: -100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(linkAbout, 0.4, {
      y: 100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })

    // cat
    50 == perc
      ? (gsap.to(topFill, 0.7, {
          fill: "#171717",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomFill, 0.7, {
          fill: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(topStroke, 0.7, {
          stroke: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomStroke, 0.7, {
          stroke: "#171717",
          ease: "Power4.easeOut",
        }))
      : perc > 50
      ? (gsap.to(topFill, 0.8, {
          fill: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomFill, 0.8, {
          fill: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(topStroke, 0.8, {
          stroke: "#171717",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomStroke, 0.8, {
          stroke: "#171717",
          ease: "Power4.easeOut",
        }))
      : perc < 50 &&
        (gsap.to(topFill, 0.8, {
          fill: "#171717",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomFill, 0.8, {
          fill: "#171717",
          ease: "Power4.easeOut",
        }),
        gsap.to(topStroke, 0.8, {
          stroke: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomStroke, 0.8, {
          stroke: "#F1EEEA",
          ease: "Power4.easeOut",
        }))
  },

  onDragEnd: (e) => {
    let yPos = e.pageY
    let xPos = e.pageX
    console.log("xpos:" + xPos + ", ypos:" + yPos)
    if (yPos < 60) {
      window.location.href = "../works.html"
    } else if (yPos > 600) {
      window.location.href = "../about.html"
    }

    // cat
    gsap.to(topFill, 0.7, {
      fill: "#171717",
      ease: "Power4.easeOut",
    }),
      gsap.to(bottomFill, 0.7, {
        fill: "#F1EEEA",
        ease: "Power4.easeOut",
      }),
      gsap.to(topStroke, 0.7, {
        stroke: "#F1EEEA",
        ease: "Power4.easeOut",
      }),
      gsap.to(bottomStroke, 0.7, {
        stroke: "#171717",
        ease: "Power4.easeOut",
      })

    // blocks
    gsap.to(topBlock, 0.5, {
      height: "50%",
      delay: 0.1,
      ease: "Power2.easeInOut",
    }),
      gsap.to(bottomBlock, 0.5, {
        height: "50%",
        delay: 0.1,
        ease: "Power2.easeInOut",
      })

    // elements
    gsap.to(menu, 0.4, {
      x: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(labelDrag, 0.4, {
      x: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(logo, 0.4, {
      x: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(social, 0.4, {
      x: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(linkWorks, 0.4, {
      y: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(linkAbout, 0.4, {
      y: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })

    cat.style.transition = "ease 300ms all"
    cat.style.transform = "translate3d(0px, 0px, 0px)"
  },
})
