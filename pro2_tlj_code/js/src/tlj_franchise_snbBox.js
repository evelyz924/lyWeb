// tlj_franchise_snbBox.js

(function($) {

// 스크롤시 snb 상단에 고정 ================
var snb = $('#snbBox');
var snbTop = snb.offset().top; 

$(window).on('scroll',function(){

  var st = $(this).scrollTop();

  if(st <= snbTop){
    snb.removeClass('fixed');
  }else{
    snb.addClass('fixed');
  }
});
// ----- snb 상단에 고정 끝


})(jQuery);