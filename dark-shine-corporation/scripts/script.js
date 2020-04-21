console.log('Script file loaded.');

document.addEventListener("DOMContentLoaded", function () {

  console.log('HTML file loaded and parsed.');


  var thumbnails = document.querySelectorAll('.thumbnail');

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", changeImage);
  }

  document.querySelector('.hamburger-menu').addEventListener('click', hamburgerMenu);
});

function changeImage(event) {
  //1. detectar en que elemento hizo el usuario click.

  var bannerImage = document.getElementById(this.getAttribute('data-img'));

  //2 si la img activa == al click no correr la funcion.

  bannerImage.classList // devuelve array con strings, chequear si active se enecuentra y de ser así return
  for (var i = 0; i < bannerImage.classList.length; i++) {
    if (bannerImage.classList[i] == 'active') {
      return;
    };
  }
  //3. ocular img activa.
  //buscar que elemento tiene la clase active y removerlo
  document.querySelector('.active').classList.remove('active');

  //4. mostrar la img correspondiente.
  // a banner img le agrego la clase active para q ponga display block
  bannerImage.classList.add('active');
}

// HAMBURGER MENU 
//press the menu and display the content
//if the menu is displayed and press again close the content.

function hamburgerMenu() {
  //1. obtener el elemento de html
  var menuObj = document.querySelector('#main-nav');
  //2. fijarme si tiene la clase para mostrar
  menuObj.classList.toggle('menu-open');
  //3. agregarle la clase si no la tiene.
  //4. sacarle la clase
}