//The .focus event occurs when an element gets focus (when selected by a mouse click or by "tab-navigating" to it).
//The .focusout event occurs when an element (or any elements inside it) loses focus.

// $(function() {
//   $('#lastName').focus(function(){
//   $('#lastName').css('border', '1px solid green');
//   });
//   $('#firstName').focusout(function(){
//   $('#firstName').css('border', '1px solid red');
//   });
// });

$(function() {
  $('input').focus(function(){
    $(this).css('border', '1px solid green');
  });
  $('input').focusout(function(){
    $(this).css('border', '1px solid green');
  });
});
