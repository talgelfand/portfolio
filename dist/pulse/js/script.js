var name = "Tal";

let number = 7;
const pi = 3.14;

number = 4;


let leftBorderWidth = 200;

/* let obj = {
    name: 'apple',
    color: 'green',
    weight: 200
} */

/* alert(1234); */
/* console.log(number); */
/* let answer = confirm("Вам есть 18?");
console.log(answer); */

/* let answer = prompt("Вам есть 18?", "");
console.log(answer); */

/* console.log(4 + 'fgd'); */

/* let isChecked = true;
    isClose = false;

console.log(isChecked || isClose);     */

/* if (2*6 == 8*1) {
    console.log("Верно");
} else {
    console.log("Error");
} */

/* let answer = confirm("Вам есть 18?");
if (answer) {
    console.log("Проходите");
} else {
    console.log("Уходите");
} */

/* const num = 50;

if (num < 49) {
    console.log('Это неправильно');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Верно');
} */

/* for (let i = 1; i < 8; i++) {
    console.log(i);
} */

/* function logging(a, b) {
    console.log(a + b)
}

logging(3, 5); 

logging(6, 8); */

//slick slider
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
      });

     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      // modal

      $('[data-modal=consultation]').on('click', function() {
          $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
          $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
      });

      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
      });

      function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                      required: true,
                      minlength: 2
                },
                phone: "required",
                email: {
                   required: true,
                   email: true 
                }
            },
            messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
            }
        });
      };

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');

      $('input[name=phone]').mask("+7 (999) 999-99-99");

      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
      });

      // page up

      $(window).scroll(function() {
        if ($(this).scrollTop()>1600) {
            $('.pageup').fadeIn('slow');
        } else {
            $('.pageup').fadeOut('slow');
        }
      });

      // smooth scroll
      
      $("a[href^=#up]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();

  });

  //tiny slider
  /* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false, 
    controls: false, //убрать дефолтные кнопки слайдера
    nav: false //убрать точки
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  }); */


  