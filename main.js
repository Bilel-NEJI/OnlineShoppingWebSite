var slideIndex = 1;
    affichageDesSlides(slideIndex);

function slideActuelle(n) {
    affichageDesSlides(slideIndex = n);
}

//fontionne qui assure le basculement entre les composants de la carousel
function affichageDesSlides(n) {
  var i;
  //mettre l'élement mesSlides dans la variable slides pour l'utiliser par la suite
  var slides = document.getElementsByClassName("mesSlides");

  //mettre l'élement point dans la variable dots pour l'utiliser par la suite
  var dots = document.getElementsByClassName("point");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  //for pour boucler dans les slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; } //pour cacher la photo de la carousel
  
      for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); } //pour apporter la photo à afficher dans la carousel

        slides[slideIndex-1].style.display = "block";   //pour mettre la slide précédente en block
        dots[slideIndex-1].className += " active";
}