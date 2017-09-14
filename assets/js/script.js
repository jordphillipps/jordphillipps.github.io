/** var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.design svg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  $('.hero-overlay .circle').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate,
    
  });
  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

var lFollowXTwo = 0,
    lFollowYTwo = 0,
    b = 0,
    c = 0,
    frict = 1 / 100;

function moveText() {
  b += (lFollowXTwo - b) * frict;
  c += (lFollowYTwo - c) * frict;
  
  translate = 'translate(' + b + 'px, ' + c + 'px) scale(1)';

  $('.hero-overlay .text h1 ').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  $('.hero-overlay .text h2 ').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  window.requestAnimationFrame(moveText);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowXTwo = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowYTwo = (10 * lMouseY) / 100;

});

moveText();**/

/** Logo scroll **/

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 30) {
         $('.logo').addClass('shrink');
     }
     else {
         $('.logo').removeClass('shrink');
     }
});

$('.js-tilt').tilt({
  scale: 1.1
});

var $circle = $('#circle');
$circle
  .velocity(
    {translateX: "0px"}, 
    {delay:0}
    );

var $design = $('#design');
$design
  .velocity(
    {opacity:1}, 
    {delay:550}
    );

var $hmGrid = $('#hmGrid');
$hmGrid
  .velocity(
    {translateX: "0px"}, 
    {delay:100}
    );

var $hmHead = $('#hmHead');
$hmHead
  .velocity(
    {translateY: "0px"}, 
    {delay:900}
    );

var $hmSub = $('#hmSub');
$hmSub
  .velocity(
    {translateY: "0px"}, 
    {delay:900}
    );

