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
