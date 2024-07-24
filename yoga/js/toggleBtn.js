const toggleBtn = document.querySelector('#toggleBtn');
const toggleMenuGroup = document.querySelector('.toggleMenuGroup');
let isVisible = true;

toggleBtn.addEventListener('click', function() {
  isVisible = !isVisible;
  toggleMenuGroup.classList.toggle('active');
  toggleBtn.textContent = isVisible ? '열기' : '닫기';

  // if (toggleMenu.style.display === 'none' ) {
  //   // 메뉴가 보이고 toggleBtn의 글자가 바뀌게 설정
  //   toggleMenu.style.display = 'block';
  //   toggleMenuGroup.classList.toggle('active');
  //   toggleBtn.textContent = '닫기';
  // } else {
  //   toggleMenu.style.display = 'none';
  //   toggleBtn.textContent = '열기';
  // }


});


// 버튼을 클릭하면
// 슬라이드 다운 된 것처럼 보이게 만들고 싶다.
// css 스타일로 height 0을 준 다음
// 클릭했을 때 classadd를 해주는 것으로 하여
// 애니메이션이 되도록 한다.
// 그러면 javascript에서 클릭했을 때 class만 추가해주면 된다.