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