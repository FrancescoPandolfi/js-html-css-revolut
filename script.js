$(document).ready(function () {


  $('.dropdown_parent > a').mouseover( function() {
    // link
    $('.dropdown_parent > a').removeClass('link_active');
    $(this).addClass('link_active');

    // dropdown menu
    $('.dropdown').removeClass('active');
    $(this).siblings('ul.dropdown').addClass('active');

    // arrow
    $('.dropdown_parent > i').removeClass('arrow_down');
    $(this).siblings('i').addClass('arrow_down');
  });


  $(window).click(function () {
    $('.dropdown').removeClass('active');
    $('.dropdown_parent > a').removeClass('link_active');
    $('.dropdown_parent > i').removeClass('arrow_down');
  });

  $('.dropdown_parent').click(function (event) {
    event.stopPropagation();
  });
});
