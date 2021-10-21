//burger
const scrolllistener = () => {
    window.scrollTo(0, 0);
};

$('.burger').click(function() {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    if (
        $('.nav').hasClass('active')
        ) {
        window.addEventListener(
            'scroll', scrolllistener
        )
    }
    else {
        window.removeEventListener(
            'scroll',scrolllistener
        )
    }
});

//drop-nav
$('.tringle-drop').on('click', function(){
    $(this).toggleClass('active') 
    $($(this).data('target')).stop(true, false).slideToggle()  
});

//slider-works
$('.slider-gallery-works').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1619,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
});