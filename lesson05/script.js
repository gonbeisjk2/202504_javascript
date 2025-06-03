// 要素の取得
const p = document.querySelector('p');
console.log(p);

const error = document.querySelector
console.log('.error');
console.log(error);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[2]);

paras.forEach(p => {
  p.style.color = 'orange';
});

console.log(p.innerText);
p.innerText = 'こんばんは';
p.textContent = 'おはようございます';

paras.forEach(p => {
  p.innerText += ' 新しいテキスト';
})

// const content = document.querySelector('.content');
// console.log(content.innerText);
// console.log(content.innerHTML);

// content.innerHTML = '<h2>見出しテキスト2</h2>'

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://yahoo.co.jp');

const error2 = document.querySelector('.error');
error2.setAttribute('style', 'background-color: beige;');

const title = document.querySelector('#page-title');
console.log(title.style);
title.style.margin = '100px';
title.style.fontSize = '120px';

console.log(error2.classList);
error2.classList.remove('error');
error2.classList.toggle('def'); //無いので追加
error2.classList.toggle('abc'); //あるので削除

//5-7のクイズ
const contentP = document.querySelectorAll('.content > p');
contentP.forEach(p => {
  console.log(p.textContent);
  console.log(p.textContent.includes('エラー'))
  if (p.textContent.includes('サクセス')) {
    p.classList.add('success');
  }
  else if (p.textContent.includes('エラー')) {
    p.classList.add('error');
  }
});

// 子要素の取得
const article = document.querySelector('article');
console.log(article.children);

//配列への変換
const articleArr = Array.from(article.children);
articleArr.forEach(child => {
  child.classList.add('article-child');
});

// 親要素の取得
const h2 = document.querySelector('h2');
console.log(h2.parentElement);
console.log(h2.closest('article')); //特定の先祖要素を検索する


// 兄弟要素の取得
console.log(h2.nextElementSibling);
console.log(h2.previousElementSibling);

// イベントの基礎
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  // ul.innerHTML += '<li>新しいToDo</li>';
  const li = document.createElement('li');
  li.textContent = '新しいToDo';
  ul.append(li);
});

// const lists = document.querySelectorAll('li');
// lists.forEach(list => {
//   list.addEventListener('click', event => {
//     // thisは使えない
//     console.log(event.target);//クリックしたLI要素が取得できる
//     console.log('リストをクリックしました');

//     // event.target.style.textDecoration = 'line-through';
//     event.target.remove(); //要素の削除

//     // 先祖要素にイベントを波及させない
//     event.stopPropagation();
//   });
// });

ul.addEventListener('click', event => {
  console.log('ulをクリックしました');
  console.log(event);

  // クリックした要素がLI要素かどうかを調べる
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
})