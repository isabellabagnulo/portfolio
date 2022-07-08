import { burgermenu } from "./menu"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(Draggable)
gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", burgermenu())

// gsap.from(".from-right", {
//   scrollTrigger: ".from-right",
//   opacity: 0,
//   duration: 2.5,
// })
// gsap.from(".from-left", {
//   scrollTrigger: ".from-left",
//   opacity: 0,
//   duration: 2.5,
//   delay: 0.5,
// })
gsap.from(".from-left-delay", {
  scrollTrigger: ".from-left-delay",
  opacity: 0,
  duration: 2.5,
  delay: 1,
})

gsap.from(".skill-1", {
  scrollTrigger: ".skill-1",
  opacity: 0,
  scale: 1.3,
  duration: 1,
})
gsap.from(".skill-9", {
  scrollTrigger: ".skill-9",
  opacity: 0,
  scale: 1.3,
  duration: 1,
})
gsap.from(".skill-2", {
  scrollTrigger: ".skill-2",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 0.2,
})
gsap.from(".skill-10", {
  scrollTrigger: ".skill-10",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 0.2,
})
gsap.from(".skill-3", {
  scrollTrigger: ".skill-3",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 0.4,
})
gsap.from(".skill-11", {
  scrollTrigger: ".skill-11",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 0.4,
})
gsap.from(".skill-4", {
  scrollTrigger: ".skill-4",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 0.6,
})
gsap.from(".skill-12", {
  scrollTrigger: ".skill-12",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 0.6,
})
gsap.from(".skill-5", {
  scrollTrigger: ".skill-5",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 0.8,
})
gsap.from(".skill-6", {
  scrollTrigger: ".skill-6",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 1,
})
gsap.from(".skill-7", {
  scrollTrigger: ".skill-7",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 1.2,
})
gsap.from(".skill-8", {
  scrollTrigger: ".skill-8",
  opacity: 0,
  scale: 1.3,
  duration: 1,
  delay: 1.4,
})

// cat
const cat = document.querySelector("#btn-cat")
const catHeight = cat.offsetHeight
const catWidth = cat.offsetWidth
let top = document.querySelector("#cat-top").querySelectorAll("path")
let topFill = top[0]
let topStroke = top[1]

let bottom = document.querySelector("#cat-bottom").querySelectorAll("path")
let bottomFill = bottom[0]
let bottomStroke = bottom[1]

cat.style.top = `calc(100%-${catHeight / 2})`
cat.style.left = `calc(100%-${catWidth / 2})`

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

// on load
gsap.from(labelDrag, {
  duration: 1.5,
  x: 100,
  opacity: 0,
  ease: "Power4.easeOut",
  delay: 1.15,
})
gsap.from(logo, {
  duration: 1.5,
  x: -100,
  opacity: 0,
  ease: "Power4.easeOut",
  delay: 0.65,
})
gsap.from(social, {
  duration: 1.5,
  x: -100,
  opacity: 0,
  ease: "Power4.easeOut",
  delay: 0.65,
})
gsap.from(linkWorks, {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "Power4.easeOut",
  delay: 0.15,
})
gsap.from(linkAbout, {
  duration: 1.5,
  y: 100,
  opacity: 0,
  ease: "Power4.easeOut",
  delay: 0.15,
})

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
    gsap.to(".intro-block-works", {
      duration: 1.2,
      height: topPerc + "%",
      ease: "Power4.easeOut",
    })
    gsap.to(".intro-block-about", {
      duration: 1.2,
      height: bottomPerc + "%",
      ease: "Power4.easeOut",
    })

    // elements
    gsap.to(menu, {
      duration: 0.4,
      x: 100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(labelDrag, {
      duration: 0.4,
      x: 100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(logo, {
      duration: 0.4,
      x: -100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(social, {
      duration: 0.4,
      x: -100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(linkWorks, {
      duration: 0.4,
      y: -100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(linkAbout, {
      duration: 0.4,
      y: 100,
      opacity: 0,
      ease: "Power4.easeOut",
      delay: 0.15,
    })

    // cat
    50 == perc
      ? (gsap.to(topFill, {
          duration: 0.7,
          fill: "#171717",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomFill, {
          duration: 0.7,
          fill: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(topStroke, {
          duration: 0.7,
          stroke: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomStroke, {
          duration: 0.7,
          stroke: "#171717",
          ease: "Power4.easeOut",
        }))
      : perc > 50
      ? (gsap.to(topFill, {
          duration: 0.8,
          fill: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomFill, {
          duration: 0.8,
          fill: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(topStroke, {
          duration: 0.8,
          stroke: "#171717",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomStroke, {
          duration: 0.8,
          stroke: "#171717",
          ease: "Power4.easeOut",
        }))
      : perc < 50 &&
        (gsap.to(topFill, {
          duration: 0.8,
          fill: "#171717",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomFill, {
          duration: 0.8,
          fill: "#171717",
          ease: "Power4.easeOut",
        }),
        gsap.to(topStroke, {
          duration: 0.8,
          stroke: "#F1EEEA",
          ease: "Power4.easeOut",
        }),
        gsap.to(bottomStroke, {
          duration: 0.8,
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
    gsap.to(cat, {
      transform: "translate3d(0px, 0px, 0px)",
    })
    // gsap.to(cat, {
    //   duration: 0.5,
    //   // top: `calc(100%-${catHeight / 2})`,
    //   // left: `calc(100%-${catWidth / 2})`,
    // }),
    gsap.to(topFill, {
      duration: 0.7,
      fill: "#171717",
      ease: "Power4.easeOut",
    }),
      gsap.to(bottomFill, {
        duration: 0.7,
        fill: "#F1EEEA",
        ease: "Power4.easeOut",
      }),
      gsap.to(topStroke, {
        duration: 0.7,
        stroke: "#F1EEEA",
        ease: "Power4.easeOut",
      }),
      gsap.to(bottomStroke, {
        duration: 0.7,
        stroke: "#171717",
        ease: "Power4.easeOut",
      })

    // blocks
    gsap.to(".intro-block-works", {
      duration: 0.5,
      height: "50%",
      delay: 0.1,
      ease: "Power2.easeInOut",
    }),
      gsap.to(".intro-block-about", {
        duration: 0.5,
        height: "50%",
        delay: 0.1,
        ease: "Power2.easeInOut",
      })

    // elements
    gsap.to(menu, {
      duration: 0.4,
      x: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(labelDrag, {
      duration: 0.4,
      x: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(logo, {
      duration: 0.4,
      x: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(social, {
      duration: 0.4,
      x: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(linkWorks, {
      duration: 0.4,
      y: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })
    gsap.to(linkAbout, {
      duration: 0.4,
      y: 0,
      opacity: 1,
      ease: "Power4.easeOut",
      delay: 0.15,
    })

    cat.style.transition = "ease 300ms all"
    cat.style.transform = "translate3d(0px, 0px, 0px)"
  },
})
