const button = document.querySelector('button');
const popup = document.querySelector('.popup');
const close = popup.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  closePopup();
});

popup.addEventListener('click', event => {
  if (event.target.classList.contains('popup')) {
    closePopup();
  }
});

function closePopup() {
  popup.style.display = 'none';
}

// タイマーでポップアップ表示
setTimeout(() => {
  popup.style.display = 'block';
}, 3000);


