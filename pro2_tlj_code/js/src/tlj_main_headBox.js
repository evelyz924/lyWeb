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


  // depth_2 나타나게 하기 =============
  var headBox = $('#headBox');
  var gnb     = $('#gnb');
  var gnbLi   = gnb.children('ul').children('li');
  var dep2    = $('.depth_2');
  var dep2a   = dep2.find('a');
  var timed   = 280;

  // dep2.hide();
  gnbLi.on('mouseenter',function(e) {
    
    dep2.stop().slideDown(timed);
    headBox.addClass('show');
  });

  headBox.on('mouseenter',function(e) {
    
    dep2.stop().slideDown(timed);
    headBox.addClass('show');
  });

  headBox.on('mouseleave',function(e) {
    dep2.stop().slideUp(timed);
      headBox.removeClass('show');
  })

  gnbLi.children('a').on('focus',function(e) {
    gnbLi.trigger('mouseenter');
  });

  dep2a.eq(-1).on('blur',function(e) {
    headBox.trigger('mouseleave');
  });
  // ------- depth_2 나타나게 끝


  // gnb_btn 반응형 적용 =============
var winW = $(window).outerwidth();
var gnbBtn = $('.gnb_btn');

  if(winW < 480){
    gnbBtn.on('click',function(e) {
      gnb.stop().fadeToggle();
      $(this).children('button').toggleClass('active');
    });
  }else if(winW < 1366){
    gnbBtn.on('click',function(e) {
      gnb.stop().slideToggle();
      $(this).children('button').toggleClass('active');
    });
  }

$(window).on('resize',function(e) {
  var nowW = $(window).outerwidth();
  if(winW !== nowW){
    location.reload();
  }
});

})(jQuery);



















