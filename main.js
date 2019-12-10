/*$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.picture').css('background-position', 'left ' + ((scrolledY)) + 'px');
});*/
jQuery(document).ready(function(t) {
  t(".bar").css("width","0"),
  t(window).on("load", function() { 
    t(".bar").each(function() {
      var n=t(this).data("level");
      t(this).animate({width:n},800)
    })
  })
})