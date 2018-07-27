

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


  headBox.on('mouseenter',function(e) {
    e.preventDefault();
    dep2.stop().slideDown(timed);
    headBox.addClass('show');
  });

  headBox.on('mouseleave',function(e) {
    e.preventDefault();
    dep2.stop().slideUp(timed);
    headBox.removeClass('show');
  })

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


  // gnb_btn 클릭시 보이기 ==============
  var winW = $(window).outerWidth();
  var gnbBtn = $('.gnb_btn');

  gnbBtn.on('click',function(e) {
    e.preventDefault();
    $(this).children('button').toggleClass('active');
    gnb.stop().slideToggle(timed);
  });

  // $(window).on('resize',function(e) {
  //   var nowW = $(window).outerwidth();
  //   if(winW !== nowW){
  //     location.reload();
  //   }
  // });
  // ------- gnb_btn 클릭시 끝


  // mobile에서 gnb 아코디언 적용 ============
  // gnbLi.eq(0).nextAll().show();

  // gnbLi.on('click',function(e){
  //   e.preventDefault();
  //   var ongnb = $(this);

  //   ongnb.parent().siblings('dep2').children('li').slideUp(timed);
  //   var thisNext = ongnb.nextAll().css('display');
  //   console.log(thisNext);

  //   if(thisNext === 'block') {
  //     ongnb.nextAll().slideUp(timed);
  //   } else {
  //     ongnb.nextAll().slideDown(timed);
  //   }
  // });
  // ------ gnb 아코디언 적용 끝




})(jQuery);



















