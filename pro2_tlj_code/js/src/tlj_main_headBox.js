// tlj_main_headBox.js

(function($) {

  // gnb 가운데로 정렬 !! ===============
  // var winW = $(window).outerWidth();
  //   var gnb = $('#gnb');
  //   var gnbw;

  //   gnbw = gnb.innerWidth();
  //   var GnbWmove = function(){
  //     gnb.css({marginLeft:-gnbw/2});
  //   }
  //   GnbWmove(gnbw);

  //   $(window).on('resize',function(e) {
  //     gnbw = gnb.innerWidth();
  //     GnbWmove(gnbw);
  //   });
  // ----- gnb 가운데 정렬 끝

  
var winW = $(window).outerWidth();

// depth_2 나타나게 하기 =============
  var headBox = $('#headBox');
  var gnb     = $('#gnb');
  var gnbLi   = gnb.children('ul').children('li');
  var dep2    = $('.depth_2');
  var dep2a   = dep2.find('a');
  var timed   = 280;

if(winW > 1024){

  headBox.on('mouseenter',function(e) {
    e.preventDefault();
    dep2.stop().slideDown(timed);
    headBox.addClass('show');
  });

  headBox.on('mouseleave',function(e) {
    e.preventDefault();
    dep2.stop().slideUp(timed);
    headBox.removeClass('show');
  });

  gnbLi.on('mouseenter',function(e) {
    e.preventDefault();
    dep2.stop().slideDown(timed);
    headBox.addClass('show');
  });

  gnbLi.children('a').on('focus',function(e) {
    e.preventDefault();
    gnbLi.trigger('mouseenter');
  });

  dep2a.eq(-1).on('blur',function(e) {
    e.preventDefault();
    headBox.trigger('mouseleave');
  });
// ------- depth_2 나타나게 끝

} // ------------------------------------ winW if()


// gnb_btn 클릭시 보이기 ==============
  var gnbBtn = $('.gnb_btn');

  gnbBtn.on('click',function(e) {
    e.preventDefault();
    $(this).children('button').toggleClass('active');
    gnb.stop().slideToggle(timed);
  });
// ------- gnb_btn 클릭시 끝


// mobile에서 gnb 아코디언 적용 ============
  // gnbLi 클릭시 dep2를 보이게 만들기
  gnbLi.children('a').on('click',function(e){
    e.preventDefault();
    var ongnb = $(this);
  ongnb.next('ol').stop().slideToggle();
  // 열렸을경우 클릭시 다시 사라지게
  ongnb.parent().siblings('li').children('ol').stop().slideUp(timed);
  });
// ------ gnb 아코디언 적용 끝


// size 변경시 새로고침 ================
$(window).on('resize',function() {
  var nowW = $(window).outerWidth();
  if(winW !== nowW){
    location.reload();
  }
});
// ----- 새로고침 끝


})(jQuery);



















