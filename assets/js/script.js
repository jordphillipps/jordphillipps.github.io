$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 30) {
         $('.logo').addClass('shrink');
     }
     else {
         $('.logo').removeClass('shrink');
     }
});


/** POrtfolio **/

$(window).scroll(function(){
  var pScroll = $(this).scrollTop();

  $('.bg-port').css({
    'transform' : 'translate(0px, -'+ pScroll /12 +'%)'
  });
});

$(window).scroll(function(){
  var pScroll = $(this).scrollTop();

  $('.bg-about').css({
    'transform' : 'translate(0px, -'+ pScroll /12 +'%)'
  });
});

$(document).ready(function() {
    $('#projectGr div').each(function(i){

          setTimeout(function(){
              $('#projectGr div').eq(i).addClass('is-showing');
          }, 50 * (i+1));
      });

      $('.portfolio #mainTitle').addClass('move-in');

      $('.about-me .text').addClass('show');

      $('.about-me .figure').addClass('show');
}); 



/* Home Animations */

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



