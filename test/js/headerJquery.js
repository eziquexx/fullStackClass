$(function(){

  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();
    
    // console.log('위치', windowTop);
    // console.log('innerHeight', innerHeight);

    // navWrap scrollTop에 따른 css 변화
    if(windowTop <= 40){
      $('.navWrap').removeClass('navAnimate');
      $('.logo img:first-child').css('display', 'block');
      $('.logo img:last-child').css('display', 'none');
      $('.menuWrap a').css('color', '#fff');
      $('.phoneNum').css({
        'border': '1px solid #fff',
        'color' : '#fff'
      });
      $('.phoneNum img:first-child').css('display', 'block');
      $('.phoneNum img:last-child').css('display', 'none');
    } else {
      $('.navWrap').addClass('navAnimate');
      $('.logo img:last-child').css('display', 'block');
      $('.logo img:first-child').css('display', 'none');
      $('.menuWrap a').css('color', '#000');
      $('.phoneNum').css({
        'border': '1px solid #000',
        'color' : '#000'
      });
      $('.phoneNum img:last-child').css('display', 'block');
      $('.phoneNum img:first-child').css('display', 'none');
    }
  }); // navWrap scrollTop event end
  

  // nav 메뉴 클릭시 해당 섹션으로 이동.
  // 그리고 메뉴 아래에 border-bottom이 생긴다.


  // span과 이미지 연결.
  const dotBtns = $('.dotBtn');
  const slideGallery = $('.imgGroup');

  function slidetest(){
    const move = slideGallery.children().first();
    slideGallery.animate({
      "left" : "-100%"
    }, function(){
      move.appendTo(slideGallery);
      slideGallery.css('left', '0');
    })
  };

  let a = setInterval(slidetest, 5000);
  //clearInterval(a);
  

  // $sliderPanel.css('left', `-${index * 100}%`);
  // let currentIndex = 0;
  // function updateSlider(index){
  //   slideGallery.css('left', `-${index * 100}%`);
  //   dotBtns.removeClass('active');
  //   dotBtns.eq(index).addClass('active');
  // }

  // dotBtns.on('click', function(){
  //   currentIndex = parseInt($(this).data('index'));
  //   updateSlider(currentIndex);
  // });

  // setInterval(function(){
  //   currentIndex = (currentIndex + 1) % dotBtns.length;
  //   updateSlider(currentIndex);
  // }, 3000);

  // setInterval(function(){
  //   slideGallery.css('margin-left', `-(${slideGallery}/2)%`);
  // }, 1000);

});