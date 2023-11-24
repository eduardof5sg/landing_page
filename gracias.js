// Obtener referencia a las estrellas y al elemento del rating
const stars = document.querySelectorAll('.star');



stars.forEach(star => {
  star.addEventListener('click', function() {
    const value = parseInt(star.getAttribute('data-value'));
   
    // Remover la clase 'selected' de todas las estrellas
    stars.forEach(s => s.classList.remove('selected'));

    // Marcar las estrellas seleccionadas hasta la que fue clickeada
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('selected');
    }

    ratingValue.textContent = currentRating;
  });
});
