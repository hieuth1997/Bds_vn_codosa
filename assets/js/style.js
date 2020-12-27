$(document).ready(function () {
  // Peloader
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 1000);

// Current nav-bar
 $(".nav-item").click(function () {
      $('.nav-item').removeClass('current');
      $(this).addClass('current');
    });
 
    // Banner
    $('.slick-banner').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: true,
      nextArrow: '<i class="fas fa-angle-right next-arrow"></i>',
      prevArrow: '<i class="fas fa-angle-left prev-arrow"></i>'

  });
  
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
  
// particel
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#333"
      },
      "shape": {
        "type": "circle",
        "opacity": .2,
        "stroke": {
          "width": 0,
          "color": "#333"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.12,
          "sync": false
        }
      },
      "size": {
        "value": 9,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#333",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

$('.slider-project').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: false,
  autoplay: true,
  dots: false,
  infinite: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.slider-benefit').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  adaptiveHeight: false,
  autoplay: false,
  dots: false,
  infinite: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

    // Return-top-top
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
  //WOW animation   
  new WOW().init();



});
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $('#return-to-top').fadeIn(200);
  } else {
    $('#return-to-top').fadeOut(200);
  }
});


$(window).scroll(function(){
  if ($(window).scrollTop() >= 50) {
     $('.navbar-default').addClass('collapse_change'); 
  } else {
      $('.navbar-default').removeClass('collapse_change');
  }
}); // End Scroll Function

$(".dropdown-item").click(function() {
  $('html, body').animate({
      scrollTop: $("#box-project-eb5").offset().top
  }, 1000);
});

// $(window).on('resize', function(){
//   autoHeight();
// }); // End Resize

