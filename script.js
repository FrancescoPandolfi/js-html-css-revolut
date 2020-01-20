$(document).ready(function () {


  $('.dropdown_parent > a').mouseover( function() {

    $('.dropdown_parent > a').removeClass('link_active');
    $(this).addClass('link_active');

    $('.dropdown').removeClass('active');
    $(this).next('ul.dropdown').addClass('active');
  });


  $(window).click(function () {
    $('.dropdown').removeClass('active');
    $('.dropdown_parent > a').removeClass('link_active');
  });

  $('.dropdown_parent').click(function (event) {
    event.stopPropagation();
  });





});
