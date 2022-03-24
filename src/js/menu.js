function burgermenu() {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector("nav")
  const menu = document.querySelector(".menu")

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
}

export { burgermenu }
