// Form validation code will come here.
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});
// Form validation code will come here.
$(document).ready(function(){
        //===== close navbar-collapse when a  clicked
        $(".one-page .navbar-nav a").on('click', function() {
            $(".navbar-collapse").removeClass("show");
        });
        $(".navbar-toggler").on('click', function() {
            $(this).toggleClass("active");
        });
        $(".one-page .navbar-nav a").on('click', function() {
            $(".navbar-toggler").removeClass('active');
        });    
    // pricing-slider-slick-start
    $('.testimonial-slider').slick({
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        fade:true,
        dots:true,
        prevArrow : ' <i class="fa fa-arrow-left left-icon"></i>',
        nextArrow : ' <i class="fa fa-arrow-right right-icon"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            }
            
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                
            }
        },  {
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                
            }
        },  {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
            }
        }]
    });

// pricing-slider-slick-end
// stiky-nav-waypoint
    $("#lead").waypoint(function (direction) {
      if (direction == "down") {
        $("#nav").addClass("sticky");
        $("sticky").fadeIn();
       } else {
            $("#nav").removeClass("sticky");
       }
              offset: '100%';
    });
    // nav-active-start
    $('#navegation-link').onePageNav({
        currentClass: 'active-link',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
    // nav-active-end
    // BOTTOM SCROLL TOP BUTTON
$(document).ready(function () {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
      } else {
        $(scrollTop).css("opacity", "0");
      }
    });
    $(scrollTop).click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
}); });
//  scroll-top END

});
