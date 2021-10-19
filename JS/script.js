// parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });
  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/8 +'%)'
  });
  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/16 +'%)'
  });
  //   console.log(wScroll);
});
