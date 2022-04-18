function burgermenu() {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector("nav")
  const menu = document.querySelector(".nav")
  const navItem = document.querySelector(".nav__list-item")

  burger.addEventListener("click", (e) => {
    e.preventDefault()
    nav.classList.toggle("open")
  })

  burger.addEventListener("click", toggleMenu)
  function toggleMenu() {
    if (menu.classList.contains("expanded")) {
      menu.classList.remove("expanded")
    } else {
      menu.classList.add("expanded")
    }
  }
  burger.addEventListener("click", () => {
    document.getElementById("link").play()
  })
  navItem.addEventListener("mouseover", () => {
    document.getElementById("hover-audio").play()
  })
}

export { burgermenu }
