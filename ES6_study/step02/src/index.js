console.log('test');

// 클래스명으로 엘리먼트 얻기 => HTMLCollection 타입
const containers = document.getElementsByClassName('container');
console.log('containers =>', containers)

// querySelector로 엘리먼트 얻기
const container = document.querySelector('.container');
console.log(container);

// querySelectorAll로 엘리먼트 얻기 => NodeList 타입
const container2 = document.querySelectorAll('.container');
console.log(container2);

// 요소 생성 (createElement)-------------------------------------
// const divEle = document.createElement('div');
// console.log(divEle);

// const pEle = document.createElement('p');
// const h2Ele = document.createElement('h2');
// divEle.appendChild(pEle);
// divEle.appendChild(h2Ele);
// console.log(divEle);

// 영역1에 버튼 추가하기
// const btnEle = document.createElement('button');
// btnEle.textContent = '버튼';
// const divEle = document.querySelector('.container');
// divEle.appendChild(btnEle);

// 요소 삭제 => 부모요소.removeChild(삭제할 요소);
// const h1Ele = document.getElementById('title');
// const mainEle = h1Ele.parentElement;
// mainEle.removeChild(h1Ele);
// mainEle.remove(); //자기 자신 삭제
// mainEle.textContent = null;