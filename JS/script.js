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

//effect mouse
var numP = 60;

for (var i = 1; i < numP; i++) {
  var _p = document.getElementById('p0').cloneNode(false);
  _p.id = "p" + i;
  document.getElementById('particles').appendChild(_p);
  TweenMax.set(_p, {scale:.5+1.5*Math.random(), alpha:.25+Math.random(), x:window.innerWidth/2+(-40+80*Math.random()), y:window.innerHeight/2+(-40+80*Math.random())})
}

window.addEventListener('mousemove', move);

function move(e){
  for (var ii = 1; ii < numP; ii++) {
    TweenMax.to('#p'+ii, .5,{delay:.005*ii, bezier:{type:'thru', values:[{x:e.clientX+25-50*Math.random(), y:e.clientY+25-50*Math.random()}, {x:e.clientX, y:e.clientY}]}, ease:Back.easeOut.config(3)})
    TweenMax.to('#p'+ii, .005*ii,{scale:4})
    TweenMax.to('#p'+ii, .5,{delay:.005*ii, scale:0})    
  }
}
