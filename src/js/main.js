$(document).ready(function () {

  // Валидация формы
  $('#hero-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Необходимо ввести не менее {0} символов"),
        maxlength: jQuery.validator.format("Необходимо ввести не более {0} символов")
      },
      phone: {
        required: "Заполните поле"
      },
      email: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });
  // Маска для телефона
  $('.phone').mask('+7 (999) 999 99-99')


   // Валидация формы в модальном окне
   $('#modal-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Необходимо ввести не менее {0} символов"),
        maxlength: jQuery.validator.format("Необходимо ввести не более {0} символов")
      },
      phone: {
        required: "Заполните поле"
      },
      email: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });
  // Маска для телефона
  $('.phone').mask('+7 (999) 999 99-99')

  //подключаем слайдер
  $('.slider-customers').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});