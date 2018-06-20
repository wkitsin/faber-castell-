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
var answers = [];

function click_answer(hash){
  answers.push(hash);
  console.log(answers);

  if (answers.length === 5) {
    get_keys(answers);
    document.getElementById("intro-wrapper").classList.add('hide');
    document.getElementById("question-wrapper").classList.add('hide');
    document.getElementById("link-buttons").className = "show";
  }
}

function get_keys(array) {
  answer_array = []
  for (i=0; i < 5; i++ ) {
    answer_array.push(array[i].a);
  }
  result_counter(answer_array);
}

function result_counter(arr) {
  result_1 = 0 ;
  result_2 = 0 ;
  for (i=0; i < arr.length; i++ ) {
    if (arr[i] === 1) {
      result_1 ++ ;
    } else {
      result_2 ++ ;
    }
    if(result_1 >= 3) {
      document.getElementById("result-1").className = "show";
    } else if(result_2 >=3) {
      document.getElementById("result-2").className = "show";
    }
  }

}
