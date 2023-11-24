$(document).ready(function(){
    $('.carousel-container').slick({
      // Configuraciones de Slick (puedes ajustar según tus necesidades)
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
  });
  
  const btnSwitch = document.querySelector('#switch');

  btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
  });