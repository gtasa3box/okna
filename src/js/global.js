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

//slider-products
$('.slider-products').slick({
  dots: false,
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
        arrows: true,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }
  ]
});

//slider-headsets
$('.slider-headsets').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1619,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }
  ]
});

//pads-click
$('.pads-block__pad').on('click', function(){
  $(this).closest(".one-window-pads-block").find(".pads-block__pad").removeClass("active");
  $(this).closest(".one-window-pads-block").find(".pads-block__oneblock").removeClass("active");
  $(this).addClass('active')
  $($(this).data('target')).addClass('active')
});

//double click nav
// $("#nav-double-click span").one("click", false);
// $("#nav-double-click-2 span").one("click", false);
jQuery('#nav-double-click-2 span , #nav-double-click span').on('click', function (e) {
  e.preventDefault();
});

//slider-fitting-window
$('.slider-fitting-window').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1619,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }
  ]
});

//slider-fitting-door
$('.slider-fittings-door').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1619,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }
  ]
});

//math
var num1;
var num2;
function math()
{
  num1 = document.getElementById("width1").value;
  num2 = document.getElementById("height1").value;
  document.getElementById("result1").innerHTML = num1 * num2;
}

//slider-fitting-window
$('.where-applicable__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1619,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        variableWidth: true
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

//create okna

document.querySelector(".form-calc__plus").addEventListener("click", function() {
  var elem = document.createElement("div");
  var back = this.dataset.mathBack;
  elem.setAttribute("class", "form-calc__item_dop-item");
  elem.innerHTML = `
                  <div class="form-calc__item">
                    <div class="form-calc__width">
                        <input id="width1" type="number" placeholder="Ширина" maxlength="8">
                    </div>
                    <div class="form-calc__height">
                        <input id="height1" type="number" placeholder="Высота" maxlength="8">
                    </div>
                    <div class="form-calc__area">
                        <!-- <input  type="number" placeholder="Площадь" maxlength="8"> -->
                        <span id="result1">Площадь</span>
                    </div>
                  </div>
`;
  document.querySelector(".form-calc__items").appendChild(elem);
});