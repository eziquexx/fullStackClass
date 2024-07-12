$(function(){
  
  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();

    let aboutScrollT = $('#about').offset().top;
    let aboutWrapH = $('#about').innerHeight();

    // let companyScrollT = $('#company').offset().top;

    let svScrollT = $('#ourService').offset().top;
    let svWrapH = $('#ourService').innerHeight();
    

    // about us scroll event
    if(windowTop > (aboutScrollT - (aboutWrapH/2))){
      $('#about #images .img1 img').animate({
        opacity : '1'
      }, 800, "swing");
      $('#about #images .img2 img').animate({
        opacity : '1'
      }, 1400, "swing");
      $('#about #BI > div').animate({
        opacity : '1'
      }, 1800, "swing");
    } // about us scroll end

    // company scroll event
    if(windowTop > 1000 ){
      $('#company .boxContentsWrap').animate({
        opacity: '1',
        top : '0'
      }, 1000, "easyOutQuint");
    } // about us scroll end




  }) 
})