$(document).ready(function () {


  $('.dropdown_parent > a').mouseover( function() {
    $('.dropdown_parent > a').removeClass('link_active');
    $(this).addClass('link_active');

    $('.dropdown').removeClass('active');
    $(this).next('ul.dropdown').addClass('active');
  });

  // $('.dropdown').mouseout( function() {
  //   $(this).removeClass('active');
  // });





});
