const html = document.documentElement
function toggleMode() {
  //adiciona a cassa 'light' para que mude o tema do site para claro
  html.classList.toggle("light")
}

//apenas para mobile
function changeIcon() {
  var menu = document.getElementById("menu-mobile")
  var icone = document.getElementById("menu-icon")

  //verificamos se a lista não está visivel
  if (menu.style.display === "none") {
    //mudamos o icone do menu e fazemos que a lista apareça
    icone.setAttribute("name", "close-outline")
    menu.style.display = "flex"
  } else {
    //mudamos o icone do menu e fechamos a lista
    icone.setAttribute("name", "menu-outline")
    menu.style.display = "none"
  }
}

//esse evento vai verificar em qual pagina estamos e desablitar e deixar destacado o link da pagina atual
window.addEventListener("load", () => {
  const links = document.querySelectorAll("a")
  const currentPath = window.location.pathname.split("/").pop()

  localStorage.setItem("activePage", currentPath)

  links.forEach((link) => {
    if (
      link.getAttribute("href").includes(localStorage.getItem("activePage"))
    ) {
      link.classList.add("active")
      link.addEventListener("click", function (event) {
        event.preventDefault()
      })
    }
  })
})
