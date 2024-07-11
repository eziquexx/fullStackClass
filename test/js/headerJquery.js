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

    let aboutTop = $('#about').scrollTop();
    console.log(aboutTop);
  }); // navWrap scrollTop event end
  
///////////////////////////////////////////////////

  // // span과 이미지 연결.
  // const dotBtns = $('.dotBtn span');
  // const slideGallery = $('.imgGroup');

  // let currentIndex = 0;

  // // 무한 이미지 갤러리
  // function slidetest(){
  //   const move = slideGallery.children().first();
  //   slideGallery.animate({
  //     "left" : "-100%"
  //   }, function(){
  //     move.appendTo(slideGallery);
  //     slideGallery.css('left', '0');
  //   })

  //   // 해당 이미지가 첫번째 자식이면
  //   // span dot의 0번째 활성화
  // };

  // let a = setInterval(slidetest, 5000);
  // //clearInterval(a);

  // // dot클릭하며 해당이미지
  // $('.dotBtn span').on('click', function(){
  //   $(this).addClass('active');
  //   $(this).next().removeClass('active');
  //   $(this).prev().removeClass('active');
  // });

/////////////////////////////////////////////////



    // const slideGallery = $('.imgGroup');
    // const dotBtns = $('.dotBtn span');


    // let currentIndex = 0;
    // function updateSlider(index){
    //   const move = $('.imgGroup > li:first-child');

    //     slideGallery.animate({
    //       "left" : `-${index * 100}%`
    //     },function(){
    //       $('.imgGroup > li:first-child').appendTo('.imgGroup');
    //     }, function(){
    //       slideGallery.animate({'left': '0'});
    //     });
    
    //     dotBtns.removeClass('active');
    //     dotBtns.eq(index).addClass('active');
       
    // }

    // dotBtns.on('click',function(){
    //     currentIndex = parseInt($(this).data('index'));
    //     updateSlider(currentIndex);

    // });
    // setInterval(function(){
    //     currentIndex = (currentIndex+1) % dotBtns.length;
    //     updateSlider(currentIndex);
    // }, 3000);





});