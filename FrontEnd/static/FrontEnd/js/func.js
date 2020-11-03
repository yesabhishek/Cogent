
// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})


$('a').click(function(e) {
      e.stopPropagation();
    });
    
    $('.card').click(function() {
      $('.card-front').toggleClass('card-flip');
      $('.card-back').toggleClass('card-flip');
    });