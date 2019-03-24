// функцию я сделал через костыли
$(document).ready(function(){
  // переменные превязанные к нужным кнопкам 
  var button = $('#call_back');
  var button2 = $('#call_back2');
  var button3 = $('#call_back3');
  var button4 = $('#call_back4');
  var button5 = $('#call_back5');
  var button6 = $('#call_back6');
  var button7 = $('#call_back7');
  var button8 = $('#call_back8');
  var button9 = $('#call_back9');
  var button10 = $('#call_back10');
  var button11 = $('#call_back11');
  var button12 = $('#call_back12');
  

  var modal = $('#modal');
  var close = $('#close');
 
// вызов модального окна
  button.on('click', function(){
    modal.addClass('modal_active');
  })
  
  button2.on('click', function(){
    modal.addClass('modal_active');
  })

  button3.on('click', function(){
    modal.addClass('modal_active');
  })

  button4.on('click', function(){
    modal.addClass('modal_active');
  })

  button5.on('click', function(){
    modal.addClass('modal_active');
  })

  button6.on('click', function(){
    modal.addClass('modal_active');
  })

  button7.on('click', function(){
    modal.addClass('modal_active');
  })

  button8.on('click', function(){
    modal.addClass('modal_active');
  })

  button9.on('click', function(){
    modal.addClass('modal_active');
  })
  
  button10.on('click', function(){
    modal.addClass('modal_active');
  })

  button11.on('click', function(){
    modal.addClass('modal_active');
  })

  button12.on('click', function(){
    modal.addClass('modal_active');
  })

// закрытие модального окна
  close.on('click', function(){
    modal.removeClass('modal_active');
  })
  })