document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".sections");
  var currentSection = 0;
  document.addEventListener("wheel", function (event) {
    event.preventDefault();
    if (event.deltaY > 0) {
      // Desplaza hacia abajo
      if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else {
      // Desplaza hacia arriba
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });
  function scrollToSection(index) {
    var scrollPosition = index * window.innerHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
});