// HTMLElement（HTMLそのもの）
// NodeList.
// HTMLCollection.

//sample01
const text1 = document.querySelector('.text1');
console.log(text1);
text1.classList.add('.hogehoge');
const text2 =
  document.querySelectorAll('.hogehoge');
console.log(text2);
// text2.forEach((el) => {
//   console.log(el);
// });
const text3 =
  document.getElementsByClassName('hogehoge');
console.log(text3);
// const hoge = document.getElementById('hoge');
// console.log(hoge);

//sample02
// const ulChildNodeList = document.querySelectorAll(
//   '.ul-block__item'
// );
// const ulChildHtmlCollection =
//   document.getElementsByClassName(
//     'ul-block__item'
//   );
// // 始めに表示する
// console.log(
//   `NodeList: ${ulChildNodeList.length}`
// );
// console.log(
//   `HTMLCollection: ${ulChildHtmlCollection.length}`
// );

// // li要素を作って、ul-blockの中に追加。
// const li = document.createElement('li');
// li.classList.add('ul-block__item');
// li.textContent = 'menu4'; //ul-blockの子要素にliを追加する
// document
//   .querySelector('.ul-block')
//   .appendChild(li); // もう一度表示

// console.log(
//   `NodeList: ${ulChildNodeList.length}`
// );
// console.log(
//   `HTMLCollection: ${ulChildHtmlCollection.length}`
// );

const keyPress = (e) => {
  console.log(this);
};

//btn1を取得
const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
//イベントハンドラを実装
btn1.addEventListener('click', output);
// btn2.addEventListener('hover', output);

//呼び出される関数
// function output(e) {
//   console.log(e);
// }
function output() {
  this.classList.add('te');
  // console.log(e);
}

// window.addEventListener('scroll', () => {
//   console.log('動く');
// });
