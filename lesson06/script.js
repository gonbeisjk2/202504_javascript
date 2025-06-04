const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const message = document.querySelector('.message');
const pattern = /^[a-zA-Z0-9]{6,12}$/;

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('送信しました');
  console.log(form.username.value);

  const username = form.username.value;

  if (pattern.test(username)) {
    message.textContent = '使用できるユーザ名です';
  } else {
    message.textContent = 'ユーザ名に使用できない文字が含まれているか、6~12文字で入力されていません';

  }
});

form.username.addEventListener('keyup', event => {
  console.log(event.target.value);
  if (pattern.test(event.target.value)) {
    event.target.classList.remove('error');
    event.target.classList.add('success');
  } else {
    event.target.classList.remove('success');
    event.target.classList.add('error');
  }
});

// 正規表現
// const username = 'taroyamada';
// const pattern = /^[a-zA-Z0-9]{6,12}$/;

// console.log(pattern.test(username));
// console.log(username.search(pattern));
