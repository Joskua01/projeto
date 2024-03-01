function toggleMode() {
  const html = document.documentElement
   html.classList.toggle("light")
   // tem que pegar a tag img
   const img = document.querySelector("#profile img")
   // substituir a imag
   if(html.classList.contains("light")) {
  // se tiver light mode, addicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
   } else {
  // se tiver sem light mode, manter a imagem
  img.setAttribute("src", "./assets/avatar.png")

  }
}