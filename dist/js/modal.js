$(document).ready(function(){
  var button = $('#call_back');
  var modal = $('#modal');
  var close = $('#close');
  
  button.on('click', function(){
    modal.addClass('modal_active');
  })
  
  close.on('click', function(){
    modal.removeClass('modal_active');
  })
  })