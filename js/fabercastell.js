$(document).ready(function(){
  $('.question input').click(function(){
    var $next = $(this).parents('.question').next('.question');
    if($next.length) {
      $("html, body").animate({
        scrollTop: $next.offset().top
      },800);
    }
  });
});
