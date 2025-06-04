const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const message = document.querySelector('.message');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('送信しました');
  console.log(form.username.value);

  const username = form.username.value;
  const pattern = /^[a-zA-Z0-9]{6,12}$/;

  if (pattern.test(username)) {
    message.textContent = '使用できるユーザ名です';
  } else {
    message.textContent = 'ユーザ名に使用できない文字が含まれているか、6~12文字で入力されていません';

  }
});

// 正規表現
const username = 'taroyamada';
const pattern = /^[a-zA-Z0-9]{6,12}$/;

console.log(pattern.test(username));
console.log(username.search(pattern));
