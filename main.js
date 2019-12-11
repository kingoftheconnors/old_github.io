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


  $('.page-link').click(function() {
    var anchor = $(this).attr("dest");
  
    $('nav span').removeClass('active');
    $("nav").find('[dest="'+ anchor +'"]').addClass('active');
  
    $('html, body').animate({
      scrollTop: $('#' + anchor).offset().top
    }, 400);
  });

})

/*
// CONTACT FORM
$('#contact-form').submit(function(e) {
  e.preventDefault();

    $.ajax({
        url: "https://formspree.io/mattwilliams85@gmail.com",
        method: "POST",
        data: { message: $('form').serialize() },
        dataType: "json"
    }).done(function(response) {
        $('#success').addClass('expand');
        $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
    });
});*/