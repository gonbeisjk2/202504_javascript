// コピーイベント
const heading = document.querySelector('.copy');
heading.addEventListener('copy', () => {
  console.log('コピーしましたね');
});


// マウスムーブイベント
const move = document.querySelector('.move');
move.addEventListener('mousemove', event => {
  // offsetXとoffsetYは要素の範囲内での座標
  console.log(`X座標: ${event.offsetX}, Y座標: ${event.offsetY}`);
});

// スクロールイベント
document.addEventListener('scroll', event => {
  console.log(event);
});