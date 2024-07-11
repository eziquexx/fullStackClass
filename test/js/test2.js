
// $(function(){
//   let slides = $('.slideWrap').children().length;
//   let min = 0;
//   let max = (slides - 1) * 100 + '%';

//   slides.width(slides*100+'%');
//   slides.draggable({
//     axis: 'x',
//     drag: function(event, ui){
//       let left = ui.position.left,
//       offsetWidth = ($(this).width() - $(this).arent().width()) * -1;

//       if(left > 0){
//         ui.position.left = 0;
//       }
//       if(offsetWidth > left){
//         ui.position.left = offsetWidth;
//       }
//     }

//   })


// })

  // span eq 번호 주기
  // 
  // let slideIndex = 0;
  // moveSlides();

  // function moveSlides() {
  //   let i;
  //   let slides = document.getElementsByClassName('gallery');
  //   let dots = document.getElementsByClassName('dot')
  //   for(i = 0; i < slides.length; i++){
  //     slides[i].style.display = 'none';
  //   }
  //   slideIndex++;

  //   // slideIndex 1로 만들어주기 왜냐하면 첫번째 이미지가 보여야하니까.
  //   if(slideIndex > slides.length){ slideIndex = 1 }
  //   for(i = 0; i < dots.length; i++){
  //     dots[i].className = dots[i].className.replace('active', '');
  //   }
  //   slides[slideIndex-1].style.display = 'block';
  //   dots[slideIndex-1].className += 'active';
  //   setTimeout(showSlides, 2000); // change img
  // }
  

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("gallery");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }