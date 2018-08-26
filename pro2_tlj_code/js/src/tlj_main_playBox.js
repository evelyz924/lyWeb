// tlj_main_playBox.js

(function($) {

  var slideBtn = $('.slide_btn');
  var prevBtn  = slideBtn.children('.prev_btn');
  var nextBtn  = slideBtn.children('.next_btn');
 
  var indicator = $('.indicator');
  var indiLi    = indicator.children('li');
 
  var slideBanner = $('.banner_wrap');

  var timed = 600;

  // 광고배너 갯수체크하기(-1)
  var bannerLength = slideBanner.children('div').length -1;

  // 최초의 값 0 
  var i = 0;

  // prevBtn 클릭시
  prevBtn.on('click',function(e){
    e.preventDefault();
    if(i > 0){  i -= 1;  } else {  i = bannerLength; }
    SlideAni(i);
  });

  // nextBtn을 클릭시
  nextBtn.on('click',function(e){
    e.preventDefault();
    if(i < bannerLength){  i += 1;  } else {  i = 0; }
    SlideAni(i);
  });

  // indiLi 클릭
  indiLi.on('click',function(e){
    e.preventDefault();
    i = $(this).index();
    SlideAni(i);
  });

  function SlideAni(i){
    var result = i * -100 + '%';
    slideBanner.stop().animate({marginLeft: result}, timed);
    indiLi.removeClass('active');
    indiLi.eq(i).addClass('active');
  }

  // 자동 슬라이드
  setInterval(function(){
    nextBtn.trigger('click');
  },2000);



})(jQuery);